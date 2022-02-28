import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"

export default function TextArea({ fieldData, control }) {
    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                    <TextField
                        multiline
                        rows={4}
                        required={!!fieldData.rules.required}
                        value={value}
                        label={fieldData.label}
                        name={fieldData.name}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : fieldData.description}
                    />
                )
            }}
        />
    )
}
