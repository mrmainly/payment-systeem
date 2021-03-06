import React, { useState, useEffect, useContext } from "react";
import {
    AppBar,
    Toolbar,
    makeStyles,
    IconButton,
    Drawer,
    MenuItem,
    Box,
    Container,
    Typography,
    InputBase,
    fade,
    FormGroup,
    Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import cookie from 'js-cookie'
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import themeMain from '../../theme'
import { DispatchContext, StateContext } from "../../store";

const useStyles = makeStyles((theme) => ({
    header: {
        "@media (max-width: 1279px)": {
            paddingLeft: 0,
            background: themeMain.palette.background.layoutBackground,
        },
    },
    drawerContainer: {
        width: 250
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    full_screen: {
        background: themeMain.palette.background.layoutBackground,
        paddingTop: 5,
        paddingBottom: 5,
        minHeight: 30
    },
    link_Style: {
        color: 'white',
        textDecoration: 'none',
        [theme.breakpoints.down('md')]: {
            color: 'black'
        },
    },
    img: {
        width: 22,
        height: 22,
        cursor: 'pointer'
    },
    login: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            fontSize: 18,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 4,
            width: '100%',
            color: 'black',
            background: 'white',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
            width: 200,
            height: 40
        },
    },
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
        justifyContent: 'space-between',
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
    imgBackground: {
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
    search: {
        marginLeft: 25,
        [theme.breakpoints.down('md')]: {
            margin: 0,
        },
    },
    inputRoot: {
        width: 285,
        backgroundColor: 'white',
        paddingLeft: 10,
        height: 35,
        borderTopLeftRadius: 4,
        borderEndStartRadius: 4,
        [theme.breakpoints.down('xs')]: {
            height: 30,
            width: 170,
        },
    },
    btn_search: {
        backgroundColor: '#459AE8',
    },
    logoBlock: {
        display: 'flex',
        flexDirection: 'row',
        width: 220,
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    logoBlockDrawer: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'row',
            width: 220,
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 20
        },
    }
}));

export default function Header() {
    const classes = useStyles();
    const router = useHistory()
    const dispatch = useContext(DispatchContext)
    const stateReducer = useContext(StateContext)

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const [search, setSearch] = useState(false)

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1279
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);
    const headersData = [
        {
            link: '/',
            title: '?????????????????????? ????????????'
        },
        {
            link: '/faq',
            title: '????????????/??????????',
            showLine: true
        }
    ];
    const displayDesktop = () => {
        return (
            <div className={classes.wrapperContainer}>
                <Box className={classes.up_block}>
                    <Container className={classes.up_block_container}>
                        <Box className={classes.up_block__info}>
                            <Typography variant="h5" className={classes.textStlye}>
                                ?????????????? ????????????
                            </Typography>
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'/img/292.png'} style={{ width: 50, height: 50, marginRight: 20 }} />
                                <Typography variant="body1" className={classes.title}>
                                    ?????? ???????????????????? ???????? (????????????) ?????????????????????????????? ???????????????? ???1 - ???????????????????????? ?????????? ????????????????
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <img src={'/img/Frame20.png'} className={classes.imgBackground} />
                        </Box>
                        <Box className={classes.headerBlock}>
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'/img/V.png'} style={{ marginRight: 10 }} />
                                <Box>
                                    <Typography style={{ fontSize: 11 }}>Call-??????????: </Typography>
                                    <Typography>500-900</Typography>
                                </Box>
                            </Box>
                            <Box style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                                <img src={'/img/V.png'} style={{ marginRight: 10 }} />
                                <Box >
                                    <Typography style={{ fontSize: 11 }}>?????????? ?????????????? ??????????: </Typography>
                                    <Box style={{ display: 'flex' }}>
                                        <Typography variant="body1">395306(????????????????)</Typography>
                                        <Typography variant="body1" style={{ marginLeft: 10 }}>395651(??????????????)</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box >
                <Box className={classes.header_down}>
                    <Container >
                        <Box className={classes.down_block}>
                            <Box style={{ display: 'flex' }}>
                                {headersData.map((item, index) => (
                                    <Link to={item.link} key={index} className={classes.link_Box}>
                                        <MenuItem className={classes.menuItemStyle} style={{ borderRight: `${item.showLine ? '2px solid white' : '0px solid white'}` }}>
                                            {item.title}
                                        </MenuItem>
                                    </Link>
                                ))}
                                <Box style={{ marginLeft: 20, marginTop: 3 }}>
                                    <FormGroup className={classes.search} row>
                                        <InputBase variant="outlined" className={classes.inputRoot} placeholder="??????????" />
                                        <Button className={classes.btn_search}><img src="/img/search.png" /></Button>
                                    </FormGroup>
                                </Box>
                            </Box>
                            <Box style={{ display: 'flex' }}>
                                <MenuItem style={{ display: 'flex', alignItems: 'center', marginLeft: 100 }} onClick={() => { router.push('/basket') }}>
                                    <img src={'/img/Frame61.png'} style={{ marginRight: 10, marginLeft: '-10px', }} />
                                    <Box>
                                        <Typography>??????????????</Typography>
                                    </Box>
                                </MenuItem>
                                {loginBlock()}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </div >

        );
    };
    const loginBlock = () => {
        return (
            <Box>
                {cookie.get('jwttoken') ?
                    <MenuItem className={classes.login}>
                        <img src={'/img/fi_user.png'} style={{ marginRight: 10 }} />
                        <Link to="/form-profile" className={classes.link_Style}>??????????????</Link>
                    </MenuItem> :
                    <MenuItem className={classes.login} onClick={() => { dispatch({ type: 'authModal', payload: { login: true } }) }}>
                        <img src={'/img/fi_user.png'} style={{ marginRight: 10 }} />
                        <Typography>?????????? ?? ??????????????</Typography>
                    </MenuItem>
                }
            </Box>
        )
    }
    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                {search ? '' :
                    <Box style={{ display: 'flex' }}>
                        <IconButton
                            {...{
                                edge: "start",
                                "aria-label": "menu",
                                "aria-haspopup": "true",
                                onClick: handleDrawerOpen,
                            }}
                            style={{ color: 'white' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box className={classes.logoBlock}>
                            <img src={'img/292.png'} />
                            <Typography variant="h6" style={{ marginLeft: 10 }}>?????????????? ????????????</Typography>
                        </Box>
                    </Box>
                }
                <Box style={search ? { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' } : { display: 'flex', alignItems: 'center' }}>
                    {search &&
                        <FormGroup className={classes.search} row>
                            <InputBase variant="outlined" className={classes.inputRoot} placeholder="??????????" />
                            <Button className={classes.btn_search}><img src="/img/search.png" /></Button>
                        </FormGroup>
                    }
                    <IconButton onClick={() => setSearch(!search)}>{search ? <HighlightOffIcon style={{ color: 'white' }} /> : <SearchIcon style={{ color: 'white' }} />}</IconButton>
                    {search ? '' : <IconButton onClick={() => router.push('/basket')}><img src="/img/Vect.png" /></IconButton>}
                </Box>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={classes.drawerContainer} >{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar >
        );
    };

    const getDrawerChoices = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box className={classes.logoBlockDrawer}>
                    <img src={'img/292.png'} />
                    <Typography variant="h6" style={{ marginLeft: 10 }}>?????????????? ????????????</Typography>
                </Box>
                {headersData.map((item, index) => (
                    <MenuItem key={index} className={classes.login} style={{ borderRight: `${item.showLine ? '2px solid white' : '0px solid white'}` }}>
                        <Link to={item.link} className={classes.link_Style}>
                            {item.title}
                        </Link>
                    </MenuItem>
                ))}
                {loginBlock()}
            </div>
        )
    };
    return (
        <header>
            <AppBar className={classes.header} position="static">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}