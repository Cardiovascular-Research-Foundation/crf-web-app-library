import { Grid } from "@mui/material"

export default function ReadOnly({ fieldData }) {
    return (
        <Grid container columnSpacing={2} mb={6}>
            <Grid item md={3}>
                {fieldData.label}
            </Grid>
            <Grid item md={7}>
                {fieldData.value}
            </Grid>
        </Grid>
    )
}
