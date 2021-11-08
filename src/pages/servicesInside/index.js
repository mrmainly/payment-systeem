import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Layout, SideBar } from '../../components'

import MainInfo from './components/MainInfo'
import Calendar from './components/Calendar'
import PriceBlock from './components/PriceBlock'
import InfoScreen from './components/InfoScreen'
import CaruselService from '../../constructor/CaruselService'

const useStyles = makeStyles((theme) => ({
    Box: {
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    sliderBox: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        },
    }
}))

const ServiceInside = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Grid container>
                <Grid item lg={3} xs={12} md={4} xl={3} sm={12}>
                    <SideBar />
                </Grid>
                <Grid item lg={9} xs={12} md={8} xl={9} sm={12}>
                    <MainInfo />
                    <Calendar />
                    <PriceBlock />
                    <InfoScreen />
                    <Typography variant="h6">Похожие услуги:</Typography>
                    <CaruselService />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default withRouter(ServiceInside)