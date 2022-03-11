import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { Button, Box, Typography, Stack } from "@mui/material"

import CenterLayout from "../layouts/CenterLayout"
import { useAppConfig } from "../providers/AppConfigProvider"
import CrfHeart from "../graphics/CrfHeart"

export default function SignIn({ providers }) {
    const router = useRouter()
    const { config } = useAppConfig()

    return (
        <CenterLayout>
            <Stack
                justifyContent="center"
                alignItems="center"
                spacing={5}
                sx={{
                    maxWidth: "100%",
                    p: "160px 100px",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    m: "20px",
                }}
            >
                <CrfHeart
                    sx={{
                        color: "#fff",
                        width: "100px",
                        height: "100px",
                    }}
                />
                <Typography variant="h1" color="#fff" textAlign="center">
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
                                        backgroundColor: "primary.dark",
                                    },
                                }}
                                onClick={() =>
                                    signIn(provider.id, {
                                        callbackUrl: router.query.callbackUrl || "/",
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
