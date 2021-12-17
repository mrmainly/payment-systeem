import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, MenuItem, Drawer } from '@material-ui/core'
import { SubMenu } from 'react-pro-sidebar'
import { Sling as Hamburger } from 'hamburger-react'

import SideBarData from '../../JsonList/SideBarData'

const useStyles = makeStyles((theme) => ({
    menuTitle: {
        backgroundColor: 'rgba(68, 119, 146, 1)',
        color: '#fff',
        padding: '5px 10px 5px 20px',
        borderRadius: 5,
        [theme.breakpoints.down('md')]: {
            borderRadius: 0
        },
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
        width: '90%',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            marginBottom: 30,
            width: 300,
        },
    },
    drawer: {
        display: 'flex',
        justifyContent: 'end',
        [theme.breakpoints.down('md')]: {
            marginBottom: 30,
            width: 300,
            marginTop: '-15px'
        },

    }
}))

const SideBar = () => {
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerState, setDrawerState] = useState(false)
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1280) {
                setDrawerState(true)
            }
            if (window.innerWidth > 1280) {
                setDrawerState(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    }, [])

    const body = () => {
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
                            <Typography variant="body1">Сначала дорогие</Typography>
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
                            title={<div className={classes.subMenuTitle}><img src={item.icon} style={{ marginRight: 10, height: 20 }} />{item.title}</div>}
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

    return (
        <div className={classes.drawer}>
            {drawerState ?
                <Box onClick={() => { setDrawerOpen(true) }}>
                    <Hamburger toggled={drawerOpen} />
                </Box>
                : ''}
            {drawerState ? <Drawer  {...{
                anchor: "left",
                open: drawerOpen,
                onClose: () => setDrawerOpen(false),
            }}>{body()}</Drawer> : body()}
        </div >
    )
}

export default SideBar