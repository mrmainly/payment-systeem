import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, MenuItem } from '@material-ui/core'
import {
    SubMenu,
} from 'react-pro-sidebar'

import SideBarData from '../../JsonList/SideBarData'

const useStyles = makeStyles(() => ({
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
        padding: '5px 20px 5px',
        cursor: 'pointer',
        minHeight: 35
    },
    subMenu_item: {
        marginLeft: '-15px',
    }
}))

const SideBar = () => {
    const classes = useStyles()

    return (
        <Box>
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
                <MenuItem className={classes.menuItemText}>
                    <Typography variant="body1">Сначала дешевые</Typography>
                </MenuItem>
                {SideBarData ? SideBarData.map((item, index) => (
                    <Box >
                        <Box style={{ borderBottom: '0.1px solid rgba(0, 0, 0, 0.25)' }}></Box>
                        <SubMenu
                            className={classes.subMenuStyle}
                            title={item.title}
                            key={index}
                        >
                            {item.menuItems.map((item, index) => (
                                <MenuItem key={index} className={classes.submenu_item}>- {item.label}</MenuItem>
                            ))}
                        </SubMenu>
                    </Box>
                )) : ''}
            </Box>
        </Box>
    )
}

export default SideBar