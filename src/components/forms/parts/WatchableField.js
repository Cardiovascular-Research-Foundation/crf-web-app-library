import { useEffect, useState, useCallback } from "react"
import { useWatch } from "react-hook-form"

/**
 * fires a callback when the wrapped field is updated
 */
export default function WatchableField({ control, fieldData, onFieldUpdated, form, children }) {
    const watchedFieldValue = useWatch({
        control,
        name: fieldData.name, // name of the field this component wraps
    })
    const [init, setInit] = useState(false)
    // debounce text and textarea fields by default
    const delay = ["text", "textarea"].includes(fieldData.type) ? 1000 : 0
    const debouncedValue = useDebounce(watchedFieldValue, delay)

    useEffect(() => {
        // do not fire on first mount
        if (!init) {
            setInit(true)
            return
        }

        onFieldUpdated(fieldData, watchedFieldValue, form)
    }, [debouncedValue])

    return children
}

// https://usehooks.com/useDebounce/
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debouncedValue
}
