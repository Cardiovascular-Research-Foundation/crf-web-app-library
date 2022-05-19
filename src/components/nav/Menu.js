import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Link from "next/link"
import {
    Divider,
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material"
import { ExpandLess, ExpandMore, OpenInNew } from "@mui/icons-material"

function Menu({ menu }) {
    return (
        <List>
            {menu.map((item, i) => {
                return <MenuItem {...item} key={item.path || i} level={0} />
            })}
        </List>
    )
}

function MenuItem(item) {
    const [open, setOpen] = useState(false)
    const { data: session } = useSession()
    const router = useRouter()

    if (item.access && !session) return null

    if (item.type === "header") {
        return (
            <ListSubheader
                inset
                sx={{
                    color: "menu.subhead",
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
                sx={{
                    borderColor: "primary.light",
                    mx: 2,
                    mt: 2,
                    mb: 1,
                }}
            />
        )
    }

    return (
        <>
            <ListItem component="li" disablePadding onClick={item.action || null}>
                <Link href={item.path || ""} passHref>
                    <ListItemButton
                        component={item.path && "a"}
                        target={item.isExternal ? "_blank" : null}
                        onClick={() => item.submenu && setOpen(!open)}
                        selected={router.asPath === item.path}
                        sx={{
                            "&:hover, &.Mui-selected": {
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                            },
                        }}
                    >
                        {item.icon && (
                            <ListItemIcon
                                sx={{
                                    ml: item.level * 15 + "px",
                                    color: "white",
                                    opacity: 0.8,
                                    fontSize: "1.2rem",
                                    minWidth: "32px",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                        )}
                        <ListItemText
                            inset={!item.icon}
                            primary={item.label}
                            primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "bold",
                                letterSpacing: 0,
                                color: "menu.text",
                            }}
                            sx={{
                                opacity: 1,
                                paddingLeft: item.icon ? "0" : 32 + item.level * 15 + "px",
                            }}
                        />
                        {item.isExternal ? <OpenInNew sx={{ color: "white" }} fontSize="small" /> : null}
                        {item.submenu ? (
                            open ? (
                                <ExpandLess sx={{ color: "white" }} />
                            ) : (
                                <ExpandMore sx={{ color: "white" }} />
                            )
                        ) : null}
                    </ListItemButton>
                </Link>
            </ListItem>
            {item.submenu && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div">
                        {item.submenu.map((child, j) => (
                            <MenuItem {...child} key={child.path || j} level={item.level + 1} />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    )
}

export default Menu
