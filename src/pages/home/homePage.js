import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import Layout from '../../components/layout/Layout'
import MainContentCards from '../../constructor/MainContentCards'
import SideBar from '../../components/layout/SideBar'

const useStyles = makeStyles((theme) => ({

}));

const HomePage = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Grid container >
                <Grid item lg={3} sm={12} md={12} xl={3} xs={12}>
                    <SideBar />
                </Grid>
                <Grid item lg={9} sm={12} md={12} xl={9} xs={12} style={{ marginTop: '-20px' }}>
                    <MainContentCards />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default HomePage