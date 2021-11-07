import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, MenuItem } from '@material-ui/core'
import {
    SubMenu,
} from 'react-pro-sidebar'

import SideBarData from '../../JsonList/SideBarData'

const useStyles = makeStyles((theme) => ({
    menuTitle: {
        backgroundColor: 'rgba(68, 119, 146, 1)',
        color: '#fff',
        padding: '5px 10px 5px 20px',
        borderRadius: 5,
    },
    menuItemBox: {
        marginBottom: 20,
        marginTop: 20
    },
    menuItemText: {
        marginTop: 10,
    },
    subMenuStyle: {
        listStyleType: 'none',
        cursor: 'pointer',
        minHeight: 30,
        marginTop: 10,
    },
    subMenu_item: {
        marginLeft: '-15px',
    },
    subMenuTitle: {
        height: 35,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        '&:hover': {
            background: "#f5f5f5",
        },
    },
    main: {
        [theme.breakpoints.down('md')]: {
            marginBottom: 30
        },
    }
}))

const SideBar = () => {
    const classes = useStyles()

    return (
        <Box className={classes.main}>
            <Box>
                <Box className={classes.menuTitle}>
                    <Typography variant="body1">Сортировка:</Typography>
                </Box>
                <Box className={classes.menuItemBox}>
                    <MenuItem className={classes.menuItemText}>
                        <Typography variant="body1" >Сначала дешевые</Typography>
                    </MenuItem>
                    <MenuItem className={classes.menuItemText}>
                        <Typography variant="body1">Сначала дешевые</Typography>
                    </MenuItem>
                </Box>
            </Box>
            <Box>
                <Box className={classes.menuTitle}>
                    <Typography variant="body1">Каталог услуг:</Typography>
                </Box>
                {SideBarData ? SideBarData.map((item, index) => (
                    <SubMenu
                        className={classes.subMenuStyle}
                        title={<div className={classes.subMenuTitle}>{item.title}</div>}
                        key={index}
                    >
                        {item.menuItems.map((item, index) => (
                            <MenuItem key={index} className={classes.submenu_item}>- {item.label}</MenuItem>
                        ))}
                    </SubMenu>
                )) : ''}
            </Box>
        </Box>
    )
}

export default SideBar