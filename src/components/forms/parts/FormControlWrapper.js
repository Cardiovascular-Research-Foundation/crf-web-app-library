import { FormControl } from "@mui/material"
import { styled } from "@mui/material/styles"

export default function FormControlWrapper({ children, ...rest }) {
    const FormControlStyledComponent = styled(FormControl)(({ theme }) => ({
        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
        },
        paddingTop: "5px",
        paddingBottom: "20px",
        ...theme.forms.style.FormControlWrapper,
    }))

    return <FormControlStyledComponent {...rest}>{children}</FormControlStyledComponent>
}
