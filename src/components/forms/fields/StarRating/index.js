import { FormLabel, FormHelperText, Rating } from "@mui/material"
import { Controller } from "react-hook-form"
import FormControlWrapper from "../../parts/FormControlWrapper"
import FieldLabelWrapper from "../../parts/FieldLabelWrapper"
import FieldWrapper from "../../parts/FieldWrapper"

export default function StarRatingField({ fieldData, control }) {
    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                    <FormControlWrapper error={!!error}>
                        <FieldLabelWrapper>
                            <FormLabel>{fieldData.label}</FormLabel>
                            {fieldData.description && <FormHelperText>{fieldData.description}</FormHelperText>}
                            {fieldData.feedback}
                            {error && <FormHelperText>{error.message}</FormHelperText>}
                        </FieldLabelWrapper>
                        <FieldWrapper mt={1}>
                            <Rating
                                required={!!fieldData.rules?.required}
                                value={parseInt(value, 10)}
                                name={fieldData.name}
                                onChange={onChange}
                                error={error ? error.message : ""}
                            />
                            {/*{value ? (*/}
                            {/*    <Box as="span" sx={{ ml: 2 }}>*/}
                            {/*        {value}*/}
                            {/*    </Box>*/}
                            {/*) : null}*/}
                        </FieldWrapper>
                    </FormControlWrapper>
                )
            }}
        />
    )
}
