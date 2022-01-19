import {useState} from 'react';
import Head from "next/head";
import { useSession } from "next-auth/react"
import {useMediaQuery} from '@mui/material';
import {
    Box, AppBar, Toolbar, Divider,
    Drawer,
    IconButton,
    Typography,
} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import { blue, amber, blueGrey } from "@mui/material/colors";

import {useAppConfig} from "../providers/AppConfigProvider";
import CrfMenu from '../nav/Menu';
import UserMenu from "../nav/UserMenu";

const drawerWidth = 260;

function StandardLayout({children, menu, userMenu}) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const {config} = useAppConfig()
    const { data: session } = useSession()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box p={2}>
                <Typography
                    lineHeight={1.2}
                    fontSize={28}
                    fontWeight={400}
                >
                    {config.name}
                </Typography>
            </Box>
            <Divider />
            {menu && (
                <CrfMenu menu={menu}/>
            )}
        </div>
    );

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Box sx={{ display: 'flex', bgcolor: blueGrey[50]}}>
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
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{color: blue[900]}} />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" color="#333" sx={{ flexGrow: 1 }}></Typography>
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
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    ) : (
                        <Drawer
                            variant="permanent"
                            sx={{
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
                        height: '100vh'
                    }}
                >
                    <Toolbar></Toolbar>
                    {children}
                </Box>
            </Box>
        </>
    );
}

export default StandardLayout;
