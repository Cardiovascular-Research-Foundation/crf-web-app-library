import { Grid } from "@mui/material"

export default function FieldWrapper({ children }) {
    return (
        <Grid item md={9}>
            {children}
        </Grid>
    )
}
