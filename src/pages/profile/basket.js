import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography, MenuItem } from '@material-ui/core'

import Layout from '../../components/layout/Layout'
import SideBarBasket from '../../components/customElements/SideBarBasket'
import { CardBasketJson } from '../../JsonList/CardBasketJson'
import CardBasket from '../../components/customElements/CardBasket'

const useStyles = makeStyles(() => ({
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}))

const Basket = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Grid container className={classes.content}>
                <Grid item lg={9} md={9} sm={12} xs={12} xl={9}>
                    <Box className={classes.titleBox}>
                        <Typography variant="h6">Корзина</Typography>
                        <MenuItem>Очистить корзину</MenuItem>
                    </Box>
                    <Box>
                        {CardBasketJson.map((item, index) => (
                            <CardBasket key={index} {...item} />
                        ))}
                    </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12} xl={3}>
                    <SideBarBasket />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Basket