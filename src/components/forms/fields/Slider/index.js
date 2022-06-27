import { Box, FormLabel, FormHelperText, Slider } from "@mui/material"
import { Controller } from "react-hook-form"
import FormControlWrapper from "../../parts/FormControlWrapper"
import FieldLabelWrapper from "../../parts/FieldLabelWrapper"
import FieldWrapper from "../../parts/FieldWrapper"

export default function SliderField({ fieldData, control }) {
    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                    <FormControlWrapper error={!!error} sx={{ flexDirection: "column!important" }}>
                        <FieldLabelWrapper>
                            <FormLabel>{fieldData.label}</FormLabel>
                            {fieldData.description && <FormHelperText>{fieldData.description}</FormHelperText>}
                            {fieldData.feedback}
                            {error && <FormHelperText>{error.message}</FormHelperText>}
                        </FieldLabelWrapper>
                        <FieldWrapper>
                            <Box sx={{ width: "100%", px: "5px" }}>
                                <Slider
                                    aria-label={fieldData.label}
                                    required={!!fieldData.rules?.required}
                                    value={parseInt(value, 10)}
                                    onChange={onChange}
                                    name={fieldData.name}
                                    error={error ? error.message : ""}
                                    valueLabelDisplay="auto"
                                    step={fieldData.params.step}
                                    marks={fieldData.params.marks}
                                    min={fieldData.params.min}
                                    max={fieldData.params.max}
                                />
                                {/*{value ? (*/}
                                {/*    <Box as="span" sx={{ ml: 2 }}>*/}
                                {/*        {value}*/}
                                {/*    </Box>*/}
                                {/*) : null}*/}
                            </Box>
                        </FieldWrapper>
                    </FormControlWrapper>
                )
            }}
        />
    )
}
