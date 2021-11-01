import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, MenuItem, Typography, Menu } from '@material-ui/core'
import { Link } from 'react-router-dom'

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
    }
}))

const SideBar = () => {
    const classes = useStyles()
    const [state, setState] = useState()
    const setOpen = (values) => {
        setState((prevData) => ({
            ...prevData,
            ...values
        }))
    }
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
                {/* {SideBarData ? SideBarData().map((item, index) => (
                    <Box key={index}>
                        <MenuItem
                            className={classes.menuItemText}
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                        >
                            {item.title}
                        </MenuItem>
                        <Menu
                            id="simple-menu"
                            keepMounted
                            open={item.open}
                        >
                            {item.menuItems.map((item, index) => (
                                <MenuItem key={index}>
                                    <Link to={item.link}>{item.label}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                )) : ''} */}
            </Box>
        </Box>
    )
}

export default SideBar