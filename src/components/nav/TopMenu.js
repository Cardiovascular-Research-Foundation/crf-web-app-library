import { useEffect, useState } from "react"
import { Stack } from "@mui/material"
import Link from "../Link"
import { ExpandLess, ExpandMore } from "@mui/icons-material"

export default function TopMenu({ menu }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        const _menu = menu.flatMap(item => {
            if (item.type || item.submenu?.length) return []
            return item
        })

        setItems(_menu)
    }, [menu])

    return (
        <Stack direction="row" sx={{ flexGrow: 1 }} spacing={4}>
            {items.map(item => (
                <Link
                    key={item.label}
                    href={item.path}
                    sx={{
                        textDecoration: "none",
                        fontWeight: 300,
                        color: "#fff",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    {item.label}
                    {item.submenu ? (
                        open ? (
                            <ExpandLess sx={{ color: "white" }} />
                        ) : (
                            <ExpandMore sx={{ color: "white" }} />
                        )
                    ) : null}
                </Link>
            ))}
        </Stack>
    )
}
