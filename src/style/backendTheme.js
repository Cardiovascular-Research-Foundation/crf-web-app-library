import { blueGrey, grey } from "@mui/material/colors"

const palette = {
    primary: {
        main: "#006eac",
        light: "#2d8ec1",
        bright: "#00fbfc",
    },
    secondary: {
        main: "#e92530",
        // light: string;
        // dark: string;
        // contrastText: string;
    },
    menu: {
        bg: blueGrey[900],
        text: "#fff",
        subhead: "#00fbfc",
    },
    page: {
        bg: blueGrey[50],
        bgDark: "#006eac",
    },
    crf: {
        red: "#e92530",
    },
    special: {
        crfLogo: "#e92530",
    },
}

export default {
    palette,
    typography: {
        fontFamily: "canada-type-gibson, sans-serif", // Roboto
        h1: {
            fontSize: 36,
            fontWeight: 300,
        },
        h2: {
            fontSize: 32,
            fontWeight: 300,
        },
        h3: {
            fontSize: 24,
            fontWeight: 300,
            color: palette.primary.main,
        },
        h4: {
            fontSize: 17,
            fontWeight: 500,
            marginTop: 25,
            marginBottom: 8,
            textTransform: "uppercase",
            color: palette.primary.main,
        },
        h5: {
            fontSize: 18,
        },
        body2: {
            fontSize: 18,
            fontWeight: 300,
            marginBottom: 24,
        },
        button: {
            fontStyle: "italic",
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: false,
            },
            styleOverrides: {
                root: {
                    maxWidth: "1100px",
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
                    boxShadow: "none",
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    a: {
                        textDecoration: "none",
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: "5px",
                    "&:before, &:hover": {
                        borderBottom: 0,
                    },
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: "filled", // standard, filled, outlined
            },
            styleOverrides: {
                root: {},
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: 0,
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginLeft: 0,
                },
            },
        },
        MuiStepLabel: {
            styleOverrides: {
                root: {
                    ".MuiStepLabel-label": {
                        marginBottom: 0,
                    },
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    width: "20px",
                    height: "20px",
                },
            },
        },
    },
}
