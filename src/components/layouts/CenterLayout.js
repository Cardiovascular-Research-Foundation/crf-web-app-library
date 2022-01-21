import { Grid } from "@mui/material"

export default function CenterLayout({ children }) {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
            bgcolor="page.bgDark"
        >
            <Grid item xs={3}>
                {children}
            </Grid>
        </Grid>
    )
}
