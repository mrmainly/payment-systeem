import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, MenuItem } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

import cookie from 'js-cookie'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 20,
        marginTop: '-10px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
}))

const UserSideBar = () => {
    const classes = useStyles()
    const history = useHistory()
    const linkArray = [
        {
            link: '/form-profile',
            label: 'Личная информация',
        },
    ]
    return (
        <Box className={classes.root}>
            {linkArray.map((item, index) => (
                <Link key={index} to={item.link} style={{ textDecoration: 'none', color: 'black', width: '100%', marginTop: 10 }}>
                    <MenuItem className={classes.menuItemStyles} >{item.label}</MenuItem>
                </Link>
            ))}
            <Box style={{ textDecoration: 'none', color: 'black', width: '100%', marginTop: 10 }}>
                <MenuItem className={classes.menuItemStyles} onClick={() => {
                    cookie.remove('jwttoken')
                    history.push('/')
                }}>Выйти</MenuItem>
            </Box>
        </Box>
    )
}

export default UserSideBar