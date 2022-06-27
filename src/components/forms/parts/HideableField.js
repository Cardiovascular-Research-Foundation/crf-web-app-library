import { useWatch } from "react-hook-form"
import { useEffect, useState } from "react"

/**
 * Shows/hides a field based on the value of another field
 */
export default function HideableField({ control, fieldData, children }) {
    const watchedFieldValue = useWatch({
        control,
        name: fieldData.params.hide_on.field, // name of the field to watch
    })
    const [show, setShow] = useState(true)

    useEffect(() => {
        const hideValue = fieldData.params.hide_on.value
        if (hideValue) {
            if (typeof hideValue === "object") {
                setShow(!hideValue.includes(watchedFieldValue))
            } else {
                setShow(watchedFieldValue !== hideValue)
            }
        } else {
            // handle falsy value
            setShow(!!watchedFieldValue)
        }
    }, [fieldData.params.hide_on, watchedFieldValue])

    if (!show) return null

    return children
}
