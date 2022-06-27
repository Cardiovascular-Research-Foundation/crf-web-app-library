import { Stack, CircularProgress, Typography } from "@mui/material"

const Spinner = ({ variant = "default", label, position = "center", color = "primary", size }) => {
    const resolvedColor = color[0] === "#" ? { sx: { color: color } } : { color }
    const resolvedSize = size ? size : variant === "inline" ? 20 : 40

    return (
        <Stack
            direction={variant === "inline" ? "row" : "column"}
            alignItems={position}
            sx={{
                py: variant === "inline" ? "10px" : "45px",
            }}
        >
            <CircularProgress {...resolvedColor} size={resolvedSize} thickness={5} />
            {label && (
                <Typography
                    variant="body1"
                    color="#333"
                    fontStyle="italic"
                    component={variant === "inline" ? "span" : "div"}
                    pl={variant === "inline" ? "10px" : 0}
                    mt={variant === "inline" ? 0 : 2}
                >
                    {label}
                </Typography>
            )}
        </Stack>
    )
}

export default Spinner
