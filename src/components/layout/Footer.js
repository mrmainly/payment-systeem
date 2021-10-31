import React from 'react'
import { Container, Grid, Typography, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    wrapperContainer: {
        background: '#EDF3F3',
        minHeight: 100,
        paddingTop: 20,
        paddingBottom: 20,

    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginTop: 20,
            marginBottom: 20
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            display: 'none'
        },
    }
}))

const Footer = () => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <div className={classes.wrapperContainer}>
            <Container>
                <Grid container className={classes.content}>
                    <Grid item lg={3} sm={4} md={3} xl={3} xs={12} >
                        <Typography variant="body1">Государственное автономное учреждение Республики Саха (Якутия) Республиканская больница №1 - Национальный центр медицины</Typography>
                        <Typography variant="body1" style={{ marginTop: 20 }}>Все права защищены, 2020</Typography>
                    </Grid>
                    <Grid item lg={3} sm={4} md={3} xl={3} xs={12} className={classes.gridItem}>
                        <Button variant="contained" color="primary" onClick={() => { history.push('/tech-support') }}>Задать вопрос</Button>
                        <Box style={{ marginTop: 20 }}>
                            <Typography variant="body1" >+7 (4112) 36-18-11</Typography>
                            <Typography variant="body2" >Справочная детская</Typography>
                        </Box>
                        <Box style={{ marginTop: 20 }}>
                            <Typography variant="body1" >+7 (4112) 35-51-11</Typography>
                            <Typography variant="body2" >Справочная взрослая</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3} sm={4} md={3} xl={3} xs={12} >
                        <Typography variant="body1">RSS-обновления | Карта сайта</Typography>
                        <Typography variant="body1" style={{ marginTop: 20 }}>This site is protected by reCAPTCHA and the Google Privacy Policyand Terms of Service apply (Этот сайт защищен reCAPTCHA, на нем применимы Политика конфиденциальности и Условия использования Google).</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer