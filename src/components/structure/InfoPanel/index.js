import { Grid } from "@mui/material"

const InfoPanel = ({ children }) => {
    return (
        <Grid container columnSpacing={2} mb={6}>
            {children}
        </Grid>
    )
}

InfoPanel.Title = ({ children }) => {
    return (
        <Grid item md={3}>
            {children}
        </Grid>
    )
}

InfoPanel.Content = ({ children }) => {
    return (
        <Grid item md={9}>
            {children}
        </Grid>
    )
}

export default InfoPanel
