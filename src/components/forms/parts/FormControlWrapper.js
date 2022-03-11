import { FormControl } from "@mui/material"
import { styled } from "@mui/material/styles"

export default function FormControlWrapper({ children, ...rest }) {
    const FormControlStyledComponent = styled(FormControl)(({ theme }) => ({
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
        },
        paddingTop: "5px",
        paddingBottom: "20px",
        borderBottom: "1px dashed #bbb",
    }))

    return <FormControlStyledComponent {...rest}>{children}</FormControlStyledComponent>
}
