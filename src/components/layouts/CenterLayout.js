import { Grid } from "@mui/material"
import DocHead from "./DocHead"

function CenterLayout({ children, title }) {
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
            <DocHead title={title} />
            <Grid item xs={3}>
                {children}
            </Grid>
        </Grid>
    )
}

export default CenterLayout
