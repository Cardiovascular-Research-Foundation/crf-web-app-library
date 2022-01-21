import { amber, blueGrey } from "@mui/material/colors"

export default {
    palette: {
        primary: {
            main: blueGrey[100],
        },
        secondary: amber,
        grey: {
            main: blueGrey[100],
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
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: blueGrey[700], // "rgb(55, 111, 208)"
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
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: "32px",
                },
            },
        },
    },
}
