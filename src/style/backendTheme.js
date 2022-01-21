import { blueGrey } from "@mui/material/colors"

export default {
    palette: {
        primary: {
            main: "#e92530",
            // light: string;
            // dark: string;
            // contrastText: string;
        },
        secondary: {
            main: "#006eac",
            light: "#2d8ec1",
            bright: "#00fbfc",
        },
        grey: {},
        menu: {
            bg: blueGrey[900],
            text: "#fff",
            subhead: "#00fbfc",
        },
        page: {
            bg: blueGrey[50],
            bgDark: "#006eac",
        },
    },
    typography: {
        h1: {
            fontSize: 36,
            fontWeight: 400,
        },
        h2: {
            fontSize: 32,
        },
        h3: {
            fontSize: 30,
        },
        h4: {
            fontSize: 26,
        },
        h5: {
            fontSize: 18,
        },
        button: {
            fontStyle: "italic",
        },
    },
    components: {
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
    },
}
