import { Box, CircularProgress, Typography } from "@mui/material"

const Spinner = ({ label, position = "center", color = "primary" }) => {
    const resolvedColor =
        color[0] === "#" ? { sx: { color: color } } : { color }

    return (
        <Box
            sx={{
                display: "flex",
                direction: "column",
                justifyContent: position,
            }}
        >
            <Box>
                <CircularProgress {...resolvedColor} />
            </Box>
            {label && (
                <Typography variant="body1" component="div">
                    {label}
                </Typography>
            )}
        </Box>
    )
}

export default Spinner
