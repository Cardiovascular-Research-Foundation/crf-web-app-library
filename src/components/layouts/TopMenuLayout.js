import { useEffect, useState } from "react"
import { Box, Stack, AppBar, Container, Toolbar, Typography } from "@mui/material"
import UserMenu from "../nav/UserMenu"
import { useAppConfig } from "../providers/AppConfigProvider"
import CrfHeart from "../graphics/CrfHeart"
import Link from "../Link"
import DocHead from "./DocHead"

function TopMenuLayout({ children, title }) {
    const { config } = useAppConfig()

    return (
        <Box
            sx={{
                backgroundColor: "#efefef",
                minHeight: "100vh",
            }}
        >
            <DocHead title={title} />
            <AppBar position="relative">
                <Toolbar>
                    <Stack direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
                        <CrfHeart
                            fontSize="medium"
                            sx={{
                                minWidth: "40px",
                                // transform: "translateY(4px)",
                                color: "crf.red",
                            }}
                        />
                        <Box>
                            <Typography variant="h6">
                                <Link href="/" sx={{ textDecoration: "none", fontWeight: 300 }} color="#333">
                                    {config.name}
                                </Link>
                            </Typography>
                            {/*<Typography variant="subtitle1" sx={{ fontSize: "13px", color: "#333", mt: "-8px" }}>*/}
                            {/*    The Learning Management System of the Cardiovascular Research Foundation*/}
                            {/*</Typography>*/}
                        </Box>
                    </Stack>
                    <Box sx={{ flexGrow: 0 }}>
                        <UserMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar>
                <Container>
                    <BasicMenu menu={config.menu} />
                </Container>
            </Toolbar>
            <Container>{children}</Container>
        </Box>
    )
}

export default TopMenuLayout

const BasicMenu = ({ menu }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const _menu = menu.flatMap(item => {
            if (item.type || item.submenu?.length) return []
            return item
        })

        setItems(_menu)
    }, [menu])

    return (
        <Stack direction="row" sx={{ flexGrow: 1 }} spacing={2}>
            {items.map(item => (
                <Link
                    key={item.label}
                    href={item.path}
                    sx={{
                        textDecoration: "none",
                        fontWeight: 300,
                    }}
                >
                    {item.label}
                </Link>
            ))}
        </Stack>
    )
}
