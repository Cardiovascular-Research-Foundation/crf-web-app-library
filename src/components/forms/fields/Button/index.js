import { Button, Box } from "@mui/material"

export default function ButtonField({ fieldData, actions, form }) {
    const fireAction = () => {
        if (actions?.[fieldData?.params?.action]) {
            actions[fieldData.params.action](form)
        } else {
            console.log(`Action not found for button with name="${fieldData.name}"`)
        }
    }

    return (
        <Box>
            <Button onClick={fireAction} variant="contained">
                {fieldData.label}
            </Button>
        </Box>
    )
}
