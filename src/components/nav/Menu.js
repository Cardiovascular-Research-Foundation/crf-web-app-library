import {useState} from 'react';
import {useSession} from "next-auth/react";
import Link from 'src/lib/Link'
import {
    Box, Divider, Collapse,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import {ExpandLess, ExpandMore, FestivalOutlined, GroupOutlined, SettingsOutlined, AccountBoxOutlined, MeetingRoomOutlined} from '@mui/icons-material';

function Menu({menu}) {

    return (
        <List>
            {menu.map((item, i) => {
                return (
                    <MenuItem {...item} key={item.label || i} level={0}/>
                )
            })}
        </List>
    )
}

function MenuItem(item) {

    const [open, setOpen] = useState(false);
    const { data: session } = useSession()

    if (item.access && !session) return false

    if (item.type === 'header') {
        return (
            <ListItem>
                <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: 'medium',
                        letterSpacing: 1,
                    }}
                    sx={{
                        opacity: 0.8,
                        textTransform: 'uppercase'
                    }}
                />
            </ListItem>
        )
    }

    if (item.type === 'divider') {
        return (
            <Divider sx={{borderColor: "#fff", opacity: 0.5, mx: "16px"}}/>
        )
    }

    return (
        <>
            <ListItem button>
                {item.icon && (
                    <ListItemIcon sx={{pl: item.level * 15 + 'px', color: "white", opacity: 0.5 }}>{item.icon}</ListItemIcon>
                )}
                <Link href={item.link || ''} color="primary">
                    <ListItemText
                        inset={!item.icon}
                        primary={item.label}
                        primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: 'medium',
                            letterSpacing: 0,
                        }}
                        sx={{
                            opacity: 1,
                        }}
                    />
                </Link>
                {item.children &&
                    <ListItemIcon onClick={() => setOpen(!open)} sx={{color: "white"}} >
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                }
            </ListItem>
            {item.children &&
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" >
                        {item.children.map(child => (
                            <MenuItem {...child} key={child.label} level={item.level+1}/>
                        ))}
                    </List>
                </Collapse>
            }
        </>
    )
}

export default Menu;