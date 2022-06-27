import { Switch, FormControlLabel, FormHelperText } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Controller } from "react-hook-form"
import FormControlWrapper from "../../parts/FormControlWrapper"

export default function SwitchField({ fieldData, control }) {
    return (
        <Controller
            name={fieldData.name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                    <FormControlWrapper>
                        <FormControlLabel
                            control={
                                <IOSSwitch
                                    required={!!fieldData.rules?.required}
                                    value={value}
                                    name={fieldData.name}
                                    onChange={onChange}
                                    error={error ? error.message : ""}
                                />
                            }
                            label={fieldData.label}
                            labelPlacement="end"
                            sx={{ ml: 1 }}
                        />
                        <FormHelperText>{error ? error.message : fieldData.description}</FormHelperText>
                    </FormControlWrapper>
                )
            }}
        />
    )
}

// this IOSSwitch taken from MUI docs example
const IOSSwitch = styled(props => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
    ({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        marginRight: "10px",
        "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "300ms",
            "&.Mui-checked": {
                transform: "translateX(16px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                    backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : theme.palette.primary.main,
                    opacity: 1,
                    border: 0,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    opacity: 0.5,
                },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: "#33cf4d",
                border: "6px solid #fff",
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
                color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
            },
        },
        "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 22,
            height: 22,
        },
        "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
            opacity: 1,
            transition: theme.transitions.create(["background-color"], {
                duration: 500,
            }),
        },
    })
)
