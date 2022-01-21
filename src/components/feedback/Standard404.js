import { Grid, Typography } from "@mui/material"

export default function Standard404() {
    return (
        <Grid container spacing={0} direction="column" alignItems="center">
            <Grid item xs={3}>
                <Typography variant="h1" mt={4}>
                    We couldn't find the page you were looking for.
                </Typography>
            </Grid>
        </Grid>
    )
}
