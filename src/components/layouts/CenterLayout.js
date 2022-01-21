import { Grid } from "@mui/material"
import { blueGrey } from "@mui/material/colors"

export default function CenterLayout({ children }) {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
            bgcolor={blueGrey[500]}
        >
            <Grid item xs={3}>
                {children}
            </Grid>
        </Grid>
    )
}
