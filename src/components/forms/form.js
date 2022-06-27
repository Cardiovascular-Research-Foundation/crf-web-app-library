import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { Stack, Button } from "@mui/material"

import Checkbox from "./fields/Checkbox"
import Datetime from "./fields/Datetime"
import Divider from "./fields/Divider"
import Label from "./fields/Label"
import Head from "./fields/Head"
import RadioButtons from "./fields/RadioButtons"
import RadioButtonsGrid from "./fields/RadioButtonsGrid"
import Switch from "./fields/Switch"
import MultiSelect from "./fields/MultiSelect"
import Text from "./fields/Text"
import TextArea from "./fields/TextArea"
import ReadOnly from "./fields/ReadOnly"
import Slider from "./fields/Slider"
import StarRating from "./fields/StarRating"

import HideableField from "./parts/HideableField"
import WatchableField from "./parts/WatchableField"

// TODO: would this work here?
// import dynamic from "next/dynamic";
// const formComponents = {
//     text: dynamic(() => import("./fields/Text")),
//     textarea: dynamic(() => import("./fields/TextArea")),
// }

const formComponents = {
    checkbox: Checkbox,
    datetime: Datetime,
    divider: Divider,
    head: Head,
    label: Label,
    multiSelect: MultiSelect,
    switch: Switch,
    text: Text,
    textarea: TextArea,
    radio: RadioButtons,
    radioGrid: RadioButtonsGrid,
    readonly: ReadOnly,
    slider: Slider,
    starRating: StarRating,
}

export default function Form({ config, onSubmit, onFieldUpdated }) {
    const schemaObject = {},
        defaultValues = {}
    // console.log({ config })

    config.fields.forEach(field => {
        // skip fields that are not in the formComponents object
        if (!formComponents[field.type]) return

        // can't assign null values to inputs, set some empty defaults
        defaultValues[field.name] = [null, undefined].includes(field.value)
            ? ["checkbox", "multiSelect"].includes(field.type)
                ? []
                : ""
            : field.value

        if (typeof field.rules !== "object") return false

        // set yup field schema type according to the field type
        let fieldSchema
        switch (field.type) {
            case "datetime":
                fieldSchema = Yup.date()
                break
            case "checkbox":
            case "multiSelect":
                fieldSchema = Yup.array()
                break
            case "switch":
                fieldSchema = Yup.boolean()
                break
            case "radioGrid":
                fieldSchema = Yup.object()
                break
            case "text":
            case "textarea":
            case "radio":
            default:
                fieldSchema = Yup.string()
        }

        field.rules.forEach(rule => {
            switch (rule.type) {
                case "required":
                    fieldSchema = fieldSchema.required(rule.msg)
                    if (fieldSchema.type === "array") {
                        // arrays must contain at least one value
                        fieldSchema = fieldSchema.min(1, rule.msg)
                    }
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

        // TODO: form-level validation across multiple fields can be inserted here referencing other fields by field.name

        schemaObject[field.name] = fieldSchema
    })

    const validationSchema = Yup.object().shape(schemaObject)

    const {
        handleSubmit, // only called after validation passes
        control,
        formState,
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: defaultValues,
    })

    useEffect(() => {
        // console.log(formState.errors)
    }, [formState.errors])

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={2} sx={{ borderTop: "0 dashed #bbb" }}>
                    {config.fields.map(field => {
                        if (field.show && formComponents.hasOwnProperty(field.type)) {
                            const Component = formComponents[field.type]

                            // TODO: refactor these wrapping components (behaviors?)
                            if (field.params?.hide_on) {
                                if (field.params?.watch && onFieldUpdated) {
                                    return (
                                        <HideableField key={field.id} fieldData={field} control={control}>
                                            <WatchableField
                                                key={field.id}
                                                fieldData={field}
                                                control={control}
                                                onFieldUpdated={onFieldUpdated}
                                            >
                                                <Component fieldData={field} control={control} />
                                            </WatchableField>
                                        </HideableField>
                                    )
                                }
                                return (
                                    <HideableField key={field.id} fieldData={field} control={control}>
                                        <Component fieldData={field} control={control} />
                                    </HideableField>
                                )
                            }

                            if (field.params?.watch && onFieldUpdated) {
                                return (
                                    <WatchableField
                                        key={field.id}
                                        fieldData={field}
                                        control={control}
                                        onFieldUpdated={onFieldUpdated}
                                    >
                                        <Component fieldData={field} control={control} />
                                    </WatchableField>
                                )
                            }

                            return <Component key={field.id} fieldData={field} control={control} />
                        } else {
                            console.log("Form component not found or field.show is false: " + field.type)
                            return null
                        }
                    })}
                    {onSubmit && (
                        <Button
                            type="submit"
                            // disabled={!formState.isValid || formState.isSubmitting}
                            // loading={formState.isSubmitting}
                            variant="contained"
                            size="large"
                            sx={{
                                maxWidth: "200px",
                            }}
                        >
                            {config.submit?.label || "Submit"}
                        </Button>
                    )}
                </Stack>
            </form>
        </LocalizationProvider>
    )
}
