import { Checkbox, FormLabel, FormGroup, FormControlLabel, FormHelperText } from "@mui/material"
import { Controller } from "react-hook-form"
import FormControlWrapper from "../../parts/FormControlWrapper"
import FieldLabelWrapper from "../../parts/FieldLabelWrapper"
import FieldWrapper from "../../parts/FieldWrapper"

export default function CheckboxField({ fieldData, control }) {
    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                const updateValue = optionValue => {
                    if (field.value.includes(optionValue)) {
                        field.value = field.value.filter(val => val !== optionValue)
                    } else {
                        field.value.push(optionValue)
                    }
                    field.onChange(field.value)
                }
                return (
                    <FormControlWrapper error={!!error}>
                        <FieldLabelWrapper>
                            <FormLabel sx={{ alignSelf: "center" }}>{fieldData.label}</FormLabel>
                            {fieldData.description && <FormHelperText>{fieldData.description}</FormHelperText>}
                            {fieldData.feedback}
                            {error && <FormHelperText>{error.message}</FormHelperText>}
                        </FieldLabelWrapper>
                        <FieldWrapper>
                            <FormGroup name={fieldData.name}>
                                {fieldData.options.map((option, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={option.value}
                                            control={<Checkbox />}
                                            label={option.label}
                                            onChange={e => updateValue(option.value)}
                                            checked={field.value.includes(option.value)}
                                        />
                                    )
                                })}
                            </FormGroup>
                        </FieldWrapper>
                    </FormControlWrapper>
                )
            }}
        />
    )
}
