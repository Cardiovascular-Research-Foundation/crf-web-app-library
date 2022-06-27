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
    Stack,
} from "@mui/material"
import { ExpandLess, ExpandMore, OpenInNew } from "@mui/icons-material"

function Menu({ menu }) {
    return (
        <Stack as="ul" direction="row" sx={{ flexGrow: 1 }} m={0} p={0}>
            {menu.map((item, i) => {
                return <MenuItem {...item} key={item.path || i} level={0} />
            })}
        </Stack>
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
            <ListItem component="li" disablePadding onClick={item.action || null} sx={{ width: "unset" }}>
                <ConditionalLink item={item}>
                    <ListItemButton
                        target={item.isExternal ? "_blank" : null}
                        onClick={() => item.submenu && setOpen(!open)}
                        onMouseOver={() => item.submenu && setOpen(true)}
                        onMouseOut={() => item.submenu && setOpen(false)}
                        selected={router.asPath === item.path}
                        sx={{
                            padding: "0 20px",
                            height: item.level ? "54px" : "64px",
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
                                // fontSize: 14,
                                letterSpacing: 0,
                                color: "menu.text",
                            }}
                            sx={{
                                paddingLeft: 0,
                                opacity: 1,
                            }}
                        />
                        {item.isExternal ? <OpenInNew sx={{ color: "white", ml: 1 }} fontSize="small" /> : null}
                        {item.submenu ? (
                            open ? (
                                <ExpandLess sx={{ color: "white" }} />
                            ) : (
                                <ExpandMore sx={{ color: "white" }} />
                            )
                        ) : null}
                        {item.submenu && (
                            <List
                                // component="div"
                                sx={{
                                    display: open ? "block" : "none",
                                    position: "absolute",
                                    top: "100%",
                                    bgcolor: "#004e7c",
                                    minWidth: "170px",
                                    zIndex: 1000,
                                    marginLeft: "-20px",
                                    padding: 0,
                                }}
                            >
                                {item.submenu.map((child, j) => (
                                    <MenuItem {...child} key={child.path || j} level={item.level + 1} />
                                ))}
                            </List>
                        )}
                    </ListItemButton>
                </ConditionalLink>
            </ListItem>
        </>
    )
}

export default Menu

function ConditionalLink({ item, children }) {
    if (!item.path) return children
    return (
        <Link href={item.path || ""} passHref>
            {children}
        </Link>
    )
}
