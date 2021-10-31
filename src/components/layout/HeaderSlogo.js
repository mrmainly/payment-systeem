import React, { useContext } from 'react'
import { Box, Container, Typography, TextField, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import themeMain from '../../theme'
import { DispatchContext } from '../../store';

const useStyles = makeStyles((theme) => ({
    menuItemStyle: {
        minHeight: 41,
        borderLeft: '2px solid white'
    },
    link_Box: {
        textDecoration: 'none',
        color: 'white'
    },
    down_block: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        color: 'white'
    },
    header_down: {
        background: themeMain.palette.background.layoutBackground
    },
    up_block: {
        minHeight: 230,
        background: themeMain.palette.background.slogoBackground
    },
    line_box: {
        width: 2,
        height: 35,
        backgroundColor: '#fff',
        [theme.breakpoints.down('xs')]: {
            height: 50
        },
    },
    up_block_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center'
        },
    },
    up_block__info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textStlye: {
        color: 'rgba(46, 51, 98, 1)',
        fontWeight: 'bold'
    },
    title: {
        marginTop: 30,
        marginBottom: 30,
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
            marginTop: 0
        },
    },
    TextFieldStyle: {
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 5,
        '&:focus': {
            outline: "none",
        },
        marginRight: 15
    },
    img: {
        width: '100%',
        marginBottom: '-10px',
        height: 230,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
        },
    },
    wrapperContainer: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    headerBlock: {
        display: 'flex',
        color: 'black',
        flexDirection: 'column',
        width: 300,
    },
}))

const HeaderSlogo = () => {
    const dispatch = useContext(DispatchContext)
    const router = useHistory()
    const headersData = [
        {
            link: '/',
            title: 'Медицинские услуги'
        },
        {
            link: '/faq',
            title: 'Вопрос/ответ',
            showLine: true
        }
    ];
    const loginBlock = () => {
        return (
            <Box>
                <MenuItem className={classes.login} onClick={() => { dispatch({ type: 'authModal', payload: { register: true } }) }}>
                    <img src={'/img/fi_user.png'} style={{ marginRight: 10 }} />
                    <Typography>Войти в аккаунт</Typography>
                </MenuItem>
                {/* <MenuItem className={classes.login}>
                    <img src={'/img/fi_user.png'} style={{ marginRight: 10 }} />
                    <Link to="/form-profile" style={{ textDecoration: 'none', color: 'white' }}>grummsed.kolesov@gmail.com</Link>
                </MenuItem> */}
            </Box>
        )
    }
    const classes = useStyles()
    return (
        <div className={classes.wrapperContainer}>
            <Box className={classes.up_block}>
                <Container className={classes.up_block_container}>
                    <Box className={classes.up_block__info}>
                        <Typography variant="h5" className={classes.textStlye}>
                            Платные услуги
                        </Typography>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={'/img/292.png'} style={{ width: 50, height: 50, marginRight: 20 }} />
                            <Typography variant="body1" className={classes.title}>
                                ГАУ Республики Саха (Якутия) Республиканская больница №1 - Национальный центр медицины
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <img src={'/img/Frame20.png'} className={classes.img} />
                    </Box>
                    <Box className={classes.headerBlock}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={'/img/V.png'} style={{ marginRight: 10 }} />
                            <Box>
                                <Typography style={{ fontSize: 11 }}>Call-центр: </Typography>
                                <Typography>500-900</Typography>
                            </Box>
                        </Box>
                        <Box style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                            <img src={'/img/V.png'} style={{ marginRight: 10 }} />
                            <Box >
                                <Typography style={{ fontSize: 11 }}>Касса платных услуг: </Typography>
                                <Box style={{ display: 'flex' }}>
                                    <Typography variant="body1">395306(взрослая)</Typography>
                                    <Typography variant="body1" style={{ marginLeft: 10 }}>395651(детская)</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box >
            <Box className={classes.header_down}>
                <Container>
                    <Box className={classes.down_block}>
                        {headersData.map((item, index) => (
                            <Link to={item.link} key={index} className={classes.link_Box}>
                                <MenuItem className={classes.menuItemStyle} style={{ borderRight: `${item.showLine ? '2px solid white' : '0px solid white'}` }}>
                                    {item.title}
                                </MenuItem>
                            </Link>
                        ))}
                        <Box style={{ marginLeft: 20 }}>
                            <TextField
                                size="small"
                                variant="outlined"
                                required
                                fullWidth
                                placeholder="Поиск"
                                className={classes.TextFieldStyle}
                            />
                        </Box>
                        <MenuItem style={{ display: 'flex', alignItems: 'center', marginLeft: 100 }} onClick={() => { router.push('/basket') }}>
                            <img src={'/img/Frame61.png'} style={{ marginRight: 10, marginLeft: '-10px' }} />
                            <Box>
                                <Typography>Корзина</Typography>
                            </Box>
                        </MenuItem>
                        {loginBlock()}
                    </Box>
                </Container>
            </Box>
        </div >
    )
}

export default HeaderSlogo