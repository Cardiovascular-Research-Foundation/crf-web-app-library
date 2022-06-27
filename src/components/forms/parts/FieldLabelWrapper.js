import { Grid } from "@mui/material"

export default function FieldLabelWrapper({ children, ...rest }) {
    return (
        <Grid item pr={4} {...rest}>
            {children}
        </Grid>
    )
}
