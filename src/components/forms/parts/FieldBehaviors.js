import { useEffect, useState } from "react"
import { useWatch } from "react-hook-form"

export default function FieldBehaviors({ control, fieldData, onFieldUpdated, form, children }) {
    const thisFieldValue = useWatch({
        control,
        name: fieldData.name, // name of the field this component wraps
        disabled: !fieldData.params?.watch,
    })
    const foreignFieldValue = useWatch({
        control,
        name: fieldData.params?.hide_on?.field, // name of the field to watch
        disabled: !fieldData.params?.hide_on,
    })
    const [show, setShow] = useState(true)
    const [init, setInit] = useState(false)

    // debounce text and textarea fields by default
    const delay = ["text", "textarea"].includes(fieldData.type) ? 500 : 0
    const debouncedValue = useDebounce(thisFieldValue, delay, fieldData.params?.watch)

    // alert watchers when this field is updated
    useEffect(() => {
        // do not fire on first mount
        if (!init) {
            setInit(true)
            return
        }

        onFieldUpdated && onFieldUpdated(fieldData, thisFieldValue, form)
    }, [debouncedValue])

    // show/hide this field
    useEffect(() => {
        if (!fieldData.params?.hide_on) return
        const hideValue = fieldData.params.hide_on?.value
        if (hideValue) {
            if (typeof hideValue === "object") {
                setShow(!hideValue.includes(foreignFieldValue))
            } else {
                setShow(foreignFieldValue !== hideValue)
            }
        } else {
            // handle falsy value
            setShow(!!foreignFieldValue)
        }
    }, [fieldData.params?.hide_on, foreignFieldValue])

    if (!show) return null

    return children
}

// https://usehooks.com/useDebounce/
function useDebounce(value, delay, enabled) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        if (!enabled) return
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debouncedValue
}
