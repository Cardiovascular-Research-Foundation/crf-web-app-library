import { createTheme, responsiveFontSizes } from "@mui/material"
const merge = require("deepmerge")

export const createMergedMuiTheme = (baseTheme = {}, appTheme = {}) => {
    const mergedTheme = merge(baseTheme, appTheme)

    let theme = createTheme(mergedTheme)
    theme = responsiveFontSizes(theme)

    return theme
}
