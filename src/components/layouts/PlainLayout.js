import {
    Box,
    Stack,
    AppBar,
    Container,
    Toolbar,
    Typography,
} from "@mui/material"
import UserMenu from "../nav/UserMenu"
import { useAppConfig } from "../providers/AppConfigProvider"
import CrfHeart from "../graphics/CrfHeart"
import Link from "../Link"
import DocHead from "./DocHead"

function PlainLayout({ children, title }) {
    const { config } = useAppConfig()

    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                minHeight: "100vh",
            }}
        >
            <DocHead title={title} />
            <AppBar position="relative">
                <Toolbar>
                    <Stack direction="row" sx={{ flexGrow: 1 }}>
                        <CrfHeart
                            fontSize="medium"
                            sx={{
                                minWidth: "40px",
                                transform: "translateY(4px)",
                                color: "crf.red",
                            }}
                        />
                        <Typography variant="h6">
                            <Link
                                href="/"
                                sx={{ textDecoration: "none", fontWeight: 300 }}
                                color="#333"
                            >
                                {config.name}
                            </Link>
                        </Typography>
                    </Stack>
                    <Box sx={{ flexGrow: 0 }}>
                        <UserMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <Container>{children}</Container>
        </Box>
    )
}

export default PlainLayout
