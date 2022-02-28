import { RadioGroup, Radio, FormControl, FormLabel, FormControlLabel, FormHelperText } from "@mui/material"
import { Controller } from "react-hook-form"

export default function RadioButtons({ fieldData, control }) {
    console.log("radio", fieldData)
    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                console.log({ field })
                return (
                    <FormControl error={!!error}>
                        <FormLabel id="demo-row-radio-buttons-group-label">{fieldData.label}</FormLabel>
                        <RadioGroup row name={fieldData.name}>
                            {fieldData.options.map((option, index) => {
                                return (
                                    <FormControlLabel
                                        key={index}
                                        value={option.value}
                                        control={<Radio />}
                                        label={option.label}
                                        onChange={field.onChange}
                                        checked={field.value === option.value}
                                    />
                                )
                            })}
                        </RadioGroup>
                        {/*<FormHelperText>{error ? error.message : fieldData.description}</FormHelperText>*/}
                    </FormControl>
                )
            }}
        />
    )
}
