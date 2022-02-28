import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { Stack, Button } from "@mui/material"
import Datetime from "./fields/Datetime"
import RadioButtons from "./fields/RadioButtons"
import RadioButtonsGrid from "./fields/RadioButtonsGrid"
import Switch from "./fields/Switch"
import MultiSelect from "./fields/MultiSelect"
import Text from "./fields/Text"
import TextArea from "./fields/TextArea"
import HideableField from "./HideableField"

const formComponents = {
    datetime: Datetime,
    multiSelect: MultiSelect,
    switch: Switch,
    text: Text,
    textarea: TextArea,
    radio: RadioButtons,
    radioGrid: RadioButtonsGrid,
}

export default function Form({ config, onSubmit }) {
    const schemaObject = {},
        defaultValues = {}

    config.fields.forEach(field => {
        // skip fields that are not in the formComponents
        if (!formComponents[field.type]) return

        // can't assign null values to an input
        defaultValues[field.name] = field.value === null ? "" : field.value

        if (typeof field.rules !== "object") return false

        let fieldSchema = Yup.string()

        field.rules.forEach(rule => {
            switch (rule.type) {
                case "required":
                    fieldSchema = fieldSchema.required(rule.msg)
                    break
                case "minlength":
                    fieldSchema = fieldSchema.min(rule.value, rule.msg)
                    break
                case "maxlength":
                    fieldSchema = fieldSchema.max(rule.value, rule.msg)
                    break
                case "nullable":
                    fieldSchema = fieldSchema.nullable()
                    break
                case "pattern":
                    if (rule.value === "email") {
                        fieldSchema = fieldSchema.email(rule.msg)
                    } else if (rule.value === "digits") {
                        fieldSchema = fieldSchema.matches(/^\d+$/, rule.msg)
                    }
                    break
                default:
                    break
            }
        })

        // TODO: validation across multiple fields can be inserted here referencing other fields by field.name

        schemaObject[field.name] = fieldSchema
    })

    const validationSchema = Yup.object().shape(schemaObject)

    const {
        handleSubmit, // only called after validation passes
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: defaultValues,
    })

    useEffect(() => {
        console.log(errors)
    }, [errors])

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={2}>
                    {config.fields.map(field => {
                        if (field.show && formComponents.hasOwnProperty(field.type)) {
                            const Component = formComponents[field.type]

                            return !field.params?.hide_on ? (
                                <Component key={field.id} fieldData={field} control={control} />
                            ) : (
                                <HideableField key={field.id} fieldData={field} control={control}>
                                    <Component fieldData={field} control={control} />
                                </HideableField>
                            )
                        } else {
                            console.log("Form component not found: " + field.type)
                            return null
                        }
                    })}
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                            maxWidth: "200px",
                        }}
                    >
                        Submit
                    </Button>
                </Stack>
            </form>
        </LocalizationProvider>
    )
}
