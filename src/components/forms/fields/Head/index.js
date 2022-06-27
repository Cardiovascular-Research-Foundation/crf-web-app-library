import { Box, FormHelperText, Typography } from "@mui/material"

export default function Head({ fieldData: { label, description, props } }) {
    return (
        <Box>
            <Typography variant="h3" color="primary" {...props}>
                {label}
            </Typography>
            {description && <FormHelperText>{description}</FormHelperText>}
        </Box>
    )
}
