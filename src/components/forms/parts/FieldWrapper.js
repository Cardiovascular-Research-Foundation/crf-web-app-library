import { Grid } from "@mui/material"

export default function FieldWrapper({ children, ...rest }) {
    return (
        <Grid item {...rest}>
            {children}
        </Grid>
    )
}
