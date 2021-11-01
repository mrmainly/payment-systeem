import React, { useReducer } from 'react'
import { Container, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import { stateReducer } from '../../reducer/mainReducer'
import { DispatchContext, StateContext, defaultStore } from '../../store/index'

import { RegisterModal, LoginModal, UserSideBar, Notification } from '../index'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    content: {
        minHeight: 600,
        padding: 20
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '-20px',
        border: '0.5px solid rgba(0, 0, 0, 0.25)',
        borderTop: 0,
        marginBottom: '-20px',
        borderBottom: 0
    },
    titleBox: {
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        borderBottom: '0.5px solid rgba(0, 0, 0, 0.25)'
    }
}))

const Layout = ({ children }) => {
    const classes = useStyles()
    const history = useHistory()
    const [state, dispatch] = useReducer(stateReducer, defaultStore)
    const changeShowSideBar = () => {
        if (history.location.pathname.match(/profile/g)) {
            return true
        } else {
            return false
        }
    }
    const changeTitle = (pathname) => {
        switch (pathname) {
            case '/form-profile': return 'Личная информация';
            case '/phone-mail-profile': return 'Телефон';
            case '/change-password-profile': return 'Изменить пароль';
        }
    }
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <Notification />
                <div style={{ overflow: 'hidden' }}>
                    <RegisterModal />
                    <LoginModal />
                    <Header />
                    <Container style={{ minHeight: 700, paddingTop: 20, paddingBottom: 20 }}>
                        {changeShowSideBar() ?
                            <Box className={classes.root}>
                                <UserSideBar />
                                <Box className={classes.container}>
                                    <Box className={classes.titleBox}>
                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>{changeTitle(history.location.pathname)}</Typography>
                                    </Box>
                                    <Box className={classes.content}>
                                        {children}
                                    </Box>
                                </Box>
                            </Box> :
                            children
                        }
                    </Container>
                    <Footer />
                </div>
            </StateContext.Provider>
        </DispatchContext.Provider >
    )
}

export default Layout