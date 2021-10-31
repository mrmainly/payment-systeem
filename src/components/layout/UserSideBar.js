import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, MenuItem } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 20,
        marginTop: '-10px'
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
        {
            link: '/phone-mail-profile',
            label: 'Телефон и электронная почта',
        },
        {
            link: '/change-password-profile',
            label: 'Изменить пароль',
        }
    ]
    return (
        <Box className={classes.root}>
            {linkArray.map((item, index) => (
                <Link to={item.link} style={{ textDecoration: 'none', color: 'black', width: '100%', marginTop: 10 }}>
                    <MenuItem key={index} className={classes.menuItemStyles} >{item.label}</MenuItem>
                </Link>
            ))}
        </Box>
    )
}

export default UserSideBar