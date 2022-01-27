import { useState } from "react"
import Head from "next/head"
import { useSession } from "next-auth/react"
import { useMediaQuery } from "@mui/material"
import {
    Box,
    AppBar,
    Toolbar,
    Divider,
    Drawer,
    IconButton,
    Typography,
    Stack,
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"

import { useAppConfig } from "../providers/AppConfigProvider"
import CrfMenu from "../nav/Menu"
import UserMenu from "../nav/UserMenu"
import Link from "../Link"
import CrfHeart from "../graphics/CrfHeart"
import DocHead from "./DocHead"

const drawerWidth = 260

function StandardLayout({ children, menu, title }) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const isMobile = useMediaQuery("(max-width:600px)")
    const { config } = useAppConfig()
    const { data: session } = useSession()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <Stack direction="row" py={2} px={0.5}>
                <CrfHeart
                    fontSize="medium"
                    sx={{
                        minWidth: "40px",
                        transform: "translateY(4px)",
                        color: "special.crfLogo",
                    }}
                />
                <Typography lineHeight={1.2} fontSize={28} fontWeight={400}>
                    <Link href="/" color="#fff" sx={{ textDecoration: "none" }}>
                        {config.name}
                    </Link>
                </Typography>
            </Stack>
            <Divider />
            {menu && <CrfMenu menu={menu} />}
        </div>
    )

    return (
        <Box sx={{ display: "flex", backgroundColor: "page.bg" }}>
            <DocHead title={title} />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon sx={{ color: "primary.main" }} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <Box sx={{ flexGrow: 0 }}>
                        <UserMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                {isMobile ? (
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                backgroundColor: "primary.main",
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                ) : (
                    <Drawer
                        variant="permanent"
                        sx={{
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                backgroundColor: "primary.main",
                            },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                )}
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    height: "100vh",
                    backgroundColor: "page.bg",
                }}
            >
                <Toolbar></Toolbar>
                {children}
            </Box>
        </Box>
    )
}

export default StandardLayout
