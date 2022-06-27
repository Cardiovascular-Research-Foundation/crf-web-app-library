import { FormHelperText, FormLabel } from "@mui/material"
import FormControlWrapper from "../../parts/FormControlWrapper"
import FieldLabelWrapper from "../../parts/FieldLabelWrapper"
import FieldWrapper from "../../parts/FieldWrapper"

export default function ReadOnly({ fieldData }) {
    return (
        <FormControlWrapper>
            <FieldLabelWrapper mb={1}>
                <FormLabel sx={{ alignSelf: "center" }}>{fieldData.label}</FormLabel>
                {fieldData.description && <FormHelperText>{fieldData.description}</FormHelperText>}
                {fieldData.feedback}
            </FieldLabelWrapper>
            <FieldWrapper>{fieldData.value}</FieldWrapper>
        </FormControlWrapper>
    )
}

// export default function ReadOnly({ fieldData }) {
//     return (
//         <FormControlWrapper>
//             <Grid container columnSpacing={2} mb={2}>
//                 <Grid item md={3}>
//                     <FormLabel>{fieldData.label}</FormLabel>
//                 </Grid>
//                 <Grid item md={7}>
//                     {fieldData.value}
//                 </Grid>
//             </Grid>
//         </FormControlWrapper>
//     )
// }
