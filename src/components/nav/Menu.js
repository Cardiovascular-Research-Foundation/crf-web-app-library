import { useState } from "react"
import { useSession } from "next-auth/react"
import Link from "../Link"
import {
    Divider,
    Collapse,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material"
import { ExpandLess, ExpandMore } from "@mui/icons-material"

function Menu({ menu }) {
    return (
        <List>
            {menu.map((item, i) => {
                return <MenuItem {...item} key={item.label || i} level={0} />
            })}
        </List>
    )
}

function MenuItem(item) {
    const [open, setOpen] = useState(false)
    const { data: session } = useSession()

    if (item.access && !session) return false

    if (item.type === "header") {
        return (
            <ListSubheader
                inset
                sx={{
                    color: "#fff",
                    backgroundColor: "transparent",
                    opacity: 0.8,
                    paddingLeft: "47px",
                }}
            >
                {item.label}
            </ListSubheader>
        )
    }

    if (item.type === "divider") {
        return (
            <Divider
                variant="inset"
                component="li"
                sx={{ borderColor: "#fff", opacity: 0.3, mx: 2, my: 2 }}
            />
        )
    }

    return (
        <>
            <ListItem button component="li">
                {item.icon && (
                    <ListItemIcon
                        sx={{
                            pl: item.level * 15 + "px",
                            color: "white",
                            opacity: 0.8,
                            fontSize: "1.2rem",
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                )}
                <Link href={item.path || ""} color="primary">
                    <ListItemText
                        inset={!item.icon}
                        primary={item.label}
                        primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: "medium",
                            letterSpacing: 0,
                        }}
                        sx={{
                            opacity: 1,
                            paddingLeft: item.icon ? "0" : "32px",
                        }}
                    />
                </Link>
                {item.children && (
                    <ListItemIcon
                        onClick={() => setOpen(!open)}
                        sx={{ color: "white" }}
                    >
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                )}
            </ListItem>
            {item.children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div">
                        {item.children.map(child => (
                            <MenuItem
                                {...child}
                                key={child.label}
                                level={item.level + 1}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    )
}

export default Menu
