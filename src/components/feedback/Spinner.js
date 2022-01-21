import { Box, CircularProgress, Typography } from "@mui/material"

const Spinner = ({ label, position = "center" }) => {
    return (
        <Box
            sx={{
                display: "flex",
                direction: "column",
                justifyContent: position,
            }}
        >
            <Box>
                <CircularProgress />
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
