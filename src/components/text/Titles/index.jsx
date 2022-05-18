import { Typography } from "@mui/material"

const Title = ({ children, ...rest }) => {
    if (rest.noMarginTop) {
        rest.mt = 0
        delete rest.noMarginTop
    }

    return (
        <Typography variant="h3" {...rest}>
            {children}
        </Typography>
    )
}

const SectionTitle = ({ children, ...rest }) => {
    return (
        <Title mt={0} color="primary.main" {...rest}>
            {children}
        </Title>
    )
}

const PageTitle = ({ children, ...rest }) => {
    return (
        <Typography variant="h1" mb={2} color="primary.main" sx={{ fontSize: "24px!important" }} {...rest}>
            {children}
        </Typography>
    )
}

export { Title, PageTitle, SectionTitle }
