import { Box, Stack, AppBar, Container, Toolbar, Typography } from "@mui/material"
import UserMenu from "../nav/UserMenu"
import { useAppConfig } from "../providers/AppConfigProvider"
import CrfHeart from "../graphics/CrfHeart"
import TopMenu from "../nav/TopMenu"
import Link from "../Link"
import DocHead from "./DocHead"

function TopMenuLayout({ children, title }) {
    const { config } = useAppConfig()

    return (
        <Box sx={{ minHeight: "100vh", pb: "80px" }}>
            <DocHead title={title} />
            <AppBar position="relative" sx={{ py: "10px", bgcolor: "primary.main" }}>
                <Container>
                    <Stack direction="row" justifyContent="space-between">
                        <Stack direction="row" sx={{ alignItems: "center" }}>
                            <CrfHeart
                                fontSize="medium"
                                sx={{
                                    minWidth: "40px",
                                    color: "#fff",
                                    // transform: "translateY(4px)",
                                }}
                            />
                            <Box>
                                <Typography variant="h6">
                                    <Link href="/" sx={{ textDecoration: "none", fontWeight: 300, color: "#fff" }}>
                                        {config.name}
                                    </Link>
                                </Typography>
                                {/*<Typography variant="subtitle1" sx={{ fontSize: "13px", color: "#fff", mt: "-8px" }}>*/}
                                {/*    The Learning Management System of the Cardiovascular Research Foundation*/}
                                {/*</Typography>*/}
                            </Box>
                        </Stack>
                        <Box>
                            <UserMenu />
                        </Box>
                    </Stack>
                </Container>
            </AppBar>
            <Toolbar sx={{ mb: "50px", borderBottom: "1px dashed #bbb" }}>
                <Container>
                    <TopMenu menu={config.menu} />
                </Container>
            </Toolbar>
            <Container>{children}</Container>
        </Box>
    )
}

export default TopMenuLayout
