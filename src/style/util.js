import { createTheme, responsiveFontSizes } from "@mui/material"

export const createMergedMuiTheme = (baseTheme = {}, appTheme = {}) => {
    const mergedTheme = {
        ...baseTheme,
        ...appTheme,
    }

    let theme = createTheme(mergedTheme)
    theme = responsiveFontSizes(theme)

    return theme
}
