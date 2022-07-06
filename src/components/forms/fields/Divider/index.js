import { Box } from "@mui/material"

export default function Divider({ fieldData }) {
    const defaultStyle = {
        borderBottom: "1px dashed",
    }
    const style = { ...defaultStyle, ...fieldData.params?.style }
    return <Box mt={2} mb={2} sx={style} />
}
