import { TextField } from "@mui/material"
import DateTimePicker from "@mui/lab/DateTimePicker"
import { Controller } from "react-hook-form"

export default function Datetime({ fieldData, control }) {
    const minMaxDates = fieldData.rules.find(rule => rule.type === "between_dates")
    const [minDate, maxDate] = minMaxDates?.value.split(",")

    // TODO: show an error message for min/max date

    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                    <DateTimePicker
                        renderInput={props => (
                            <TextField
                                {...props}
                                variant="outlined"
                                label={fieldData.label}
                                sx={{ maxWidth: "225px" }}
                            />
                        )}
                        value={value}
                        label={fieldData.title}
                        required={!!fieldData.rules.required}
                        name={fieldData.name}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : fieldData.description}
                        minDate={minDate ? new Date(minDate) : null}
                        maxDate={maxDate ? new Date(maxDate) : null}
                    />
                )
            }}
        />
    )
}
