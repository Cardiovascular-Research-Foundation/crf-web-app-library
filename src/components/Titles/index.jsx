import {Typography} from "@mui/material";

const Title = ({children, ...rest}) => {

    if (rest.noMarginTop) {
        rest.mt = 0
        delete rest.noMarginTop
    }

    return (
        <Typography gutterBottom component="div" fontWeight={800} fontSize={32} {...rest}>
            {children}
        </Typography>
    )
}

const PageTitle = ({children}) => {
    return (
        <Title>
            {children}
        </Title>
    )
}

const SectionTitle = ({children, ...rest}) => {
    return (
        <Title fontSize={42} mt={2} {...rest}>
            {children}
        </Title>
    )
}

export {
    Title, PageTitle, SectionTitle
}