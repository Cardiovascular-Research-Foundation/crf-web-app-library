import { FormHelperText, FormLabel } from "@mui/material"
import { Controller } from "react-hook-form"
import FormControlWrapper from "../../parts/FormControlWrapper"
import FieldLabelWrapper from "../../parts/FieldLabelWrapper"
import FieldWrapper from "../../parts/FieldWrapper"

export default function ReadOnly({ fieldData, control }) {
    const valueSize = fieldData.params?.size || "default"
    const valueStyles = {
        default: {},
        large: {
            fontSize: "24px",
        },
    }

    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field: { value } }) => {
                return (
                    <FormControlWrapper>
                        <FieldLabelWrapper mb={1}>
                            <FormLabel sx={{ alignSelf: "center" }}>{fieldData.label}</FormLabel>
                            {fieldData.description && <FormHelperText>{fieldData.description}</FormHelperText>}
                            {fieldData.feedback}
                        </FieldLabelWrapper>
                        <FieldWrapper {...valueStyles[valueSize]}>{value}</FieldWrapper>
                    </FormControlWrapper>
                )
            }}
        />
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
