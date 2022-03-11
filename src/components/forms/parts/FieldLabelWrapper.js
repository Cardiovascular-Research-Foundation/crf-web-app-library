import { Grid } from "@mui/material"

export default function FieldLabelWrapper({ children }) {
    return (
        <Grid item md={3} pr={4}>
            {children}
        </Grid>
    )
}
