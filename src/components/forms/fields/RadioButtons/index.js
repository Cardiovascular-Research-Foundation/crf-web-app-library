import { RadioGroup, Radio, FormLabel, FormControlLabel, FormHelperText } from "@mui/material"
import { Controller } from "react-hook-form"
import FormControlWrapper from "../../parts/FormControlWrapper"
import FieldLabelWrapper from "../../parts/FieldLabelWrapper"
import FieldWrapper from "../../parts/FieldWrapper"

export default function RadioButtons({ fieldData, control }) {
    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                return (
                    <FormControlWrapper error={!!error}>
                        <FieldLabelWrapper>
                            <FormLabel sx={{ alignSelf: "center" }}>{fieldData.label}</FormLabel>
                            {fieldData.description && <FormHelperText>{fieldData.description}</FormHelperText>}
                            {fieldData.feedback}
                            {error && <FormHelperText>{error.message}</FormHelperText>}
                        </FieldLabelWrapper>
                        <FieldWrapper>
                            <RadioGroup
                                row={fieldData.params?.inline ? true : null}
                                column={fieldData.params?.inline ? null : true}
                                name={fieldData.name}
                            >
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
                        </FieldWrapper>
                    </FormControlWrapper>
                )
            }}
        />
    )
}
