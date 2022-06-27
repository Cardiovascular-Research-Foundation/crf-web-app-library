import { FormHelperText, FormLabel } from "@mui/material"
import FormControlWrapper from "../../parts/FormControlWrapper"

export default function Label({ fieldData }) {
    return (
        <FormControlWrapper>
            <FormLabel>{fieldData.label}</FormLabel>
            {fieldData.description && <FormHelperText>{fieldData.description}</FormHelperText>}
        </FormControlWrapper>
    )
}
