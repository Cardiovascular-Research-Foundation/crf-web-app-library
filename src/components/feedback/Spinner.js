import { Stack, CircularProgress, Typography } from "@mui/material"

const Spinner = ({ label, position = "center", color = "primary" }) => {
    const resolvedColor = color[0] === "#" ? { sx: { color: color } } : { color }

    return (
        <Stack
            direction="column"
            alignItems={position}
            sx={{
                py: "45px",
            }}
        >
            <CircularProgress {...resolvedColor} />
            {label && (
                <Typography variant="body1" component="div" mt={2}>
                    {label}
                </Typography>
            )}
        </Stack>
    )
}

export default Spinner
