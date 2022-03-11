import { useEffect, useState } from "react"
import { Stack } from "@mui/material"
import Link from "../Link"

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
                        color: "#000",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    {item.label}
                </Link>
            ))}
        </Stack>
    )
}
