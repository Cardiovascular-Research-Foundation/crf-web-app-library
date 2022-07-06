import { Button } from "@mui/material"
import Link from "../../Link"

export default function LinkButton({ label, href, size = "large", variant = "contained", ...rest }) {
    return (
        <Link href={href} sx={{ textDecoration: "none" }}>
            <Button variant={variant} size={size} {...rest}>
                {label}
            </Button>
        </Link>
    )
}
