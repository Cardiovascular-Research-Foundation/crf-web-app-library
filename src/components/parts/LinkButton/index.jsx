import { Button } from "@mui/material"
import Link from "../../Link"

export default function LinkButton({ label, href, size = "large", variant = "contained" }) {
    return (
        <Link href={href}>
            <Button variant={variant} size={size}>
                {label}
            </Button>
        </Link>
    )
}
