import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import {Link, useLocation} from "react-router-dom";
import colors from "../theme/colors";

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: "none",

    },
    linkText: {
        color: "black"
    },
    listItem: {
        '&.active': {
            backgroundColor: 'rgba(240,240,240)'
        }
    }
}));


const links = [
    {
        url: "/",
        title: "Dashboard",
        exact: true,
        icon: () => <HomeIcon width={35} style={{width: "auto", height: "auto", color: colors.palette.primary}} />
    },
]

export const MainListItems = () => {
    const classes = useStyles();
    const location = useLocation();

    const isActive = (link, exact) => {
        return exact? location.pathname === link : location.pathname.includes(link)
    }
    return(<div>
        {
            links.map(({url, title, exact, icon: Icon}) =>
                <ListItem button className={clsx(classes.listItem, isActive(url, exact) && "active")}>
                    <Link to={url} className={classes.link}>
                        <ListItemIcon>
                            <Icon/>
                        </ListItemIcon>
                        <ListItemText primary={title} className={classes.linkText}/>
                    </Link>
                </ListItem>
            )
        }
    </div>)
};
