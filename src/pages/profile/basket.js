import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography, MenuItem } from '@material-ui/core'

import { CardBasketJson } from '../../JsonList/CardBasketJson'

import { Layout, SideBarBasket, CardBasket } from '../../components'

const useStyles = makeStyles((theme) => ({
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    content: {
        width: '90%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginBottom: 20
        },
    }
}))

const Basket = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Grid container >
                <Grid item lg={9} md={8} sm={12} xs={12} xl={9}>
                    <Box className={classes.content}>
                        <Box className={classes.titleBox}>
                            <Typography variant="h6">Корзина</Typography>
                            <MenuItem>Очистить корзину</MenuItem>
                        </Box>
                        <Box>
                            {CardBasketJson.map((item, index) => (
                                <CardBasket key={index} {...item} />
                            ))}
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} sm={12} xs={12} xl={3} >
                    <SideBarBasket />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Basket