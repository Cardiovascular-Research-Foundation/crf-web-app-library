import { useState } from "react"
import Link from "../Link"
import { useSession, signOut, signIn } from "next-auth/react"
import {
    Stack,
    Menu,
    MenuItem,
    ListItemIcon,
    Tooltip,
    Typography,
    IconButton,
    Button,
} from "@mui/material"
import { AccountCircle, Settings, Logout } from "@mui/icons-material"
import { useAppConfig } from "../providers/AppConfigProvider"

export default function UserMenu() {
    const [anchorElUser, setAnchorElUser] = useState(null)
    const { data: session } = useSession()
    const { config } = useAppConfig()

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    if (!session) {
        return (
            <Button
                variant="contained"
                onClick={() => signIn(config.authProvider || "okta")}
            >
                Login
            </Button>
        )
    }

    return (
        <>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography color="primary.main">
                    {session.user.name}
                </Typography>
                <Tooltip title="User Menu">
                    <IconButton
                        aria-label="User Menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenUserMenu}
                        sx={{ p: 0 }}
                        color="inherit"
                    >
                        <AccountCircle
                            sx={{
                                color: "primary.main",
                                width: "36px",
                                height: "36px",
                            }}
                        />
                    </IconButton>
                </Tooltip>
            </Stack>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                onClick={handleCloseUserMenu}
            >
                <MenuItem component={Link} href="/user/profile">
                    <ListItemIcon>
                        <AccountCircle
                            fontSize="small"
                            sx={{ color: "primary.main" }}
                        />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem component={Link} href="/user/settings">
                    <ListItemIcon>
                        <Settings
                            fontSize="small"
                            sx={{ color: "primary.main" }}
                        />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem
                    onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                >
                    <ListItemIcon>
                        <Logout
                            fontSize="small"
                            sx={{ color: "primary.main" }}
                        />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}
