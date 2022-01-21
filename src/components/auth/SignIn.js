import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { Button, Box, Typography, Stack } from "@mui/material"

import CenterLayout from "../layouts/CenterLayout"
import { useAppConfig } from "../providers/AppConfigProvider"

export default function SignIn({ providers }) {
    const router = useRouter()
    const { config } = useAppConfig()

    return (
        <CenterLayout>
            <Stack justifyContent="center" alignItems="center" spacing={5}>
                <Typography variant="h1" color="#fff">
                    {config.name}
                </Typography>
                <Box>
                    {Object.values(providers).map(provider => (
                        <Box key={provider.name}>
                            <Button
                                size="large"
                                variant="outlined"
                                sx={{
                                    color: "white",
                                    borderColor: "white",
                                    "&:hover": {
                                        borderColor: "white",
                                        backgroundColor: "secondary.dark",
                                    },
                                }}
                                onClick={() =>
                                    signIn(provider.id, {
                                        callbackUrl:
                                            router.query.callbackUrl || "/",
                                    })
                                }
                            >
                                Sign in
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </CenterLayout>
    )
}

SignIn.auth = {
    allowAll: true,
}
