import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        borderTopLeftRadius: 15,
        borderEndEndRadius: 15
    },
    cover: {
        height: '100%'
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
    },
    titleBox: {
        color: 'rgba(66, 146, 188, 1)',
        wordWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    priceBlock: {
        display: 'flex',
    },
    actionBlock: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default function CardBasket(props) {
    const classes = useStyles();
    const history = useHistory()
    return (
        <Card className={classes.root}>
            <Grid container style={{ minHeight: 180, }}>
                <Grid item lg={4} sm={4} md={4} xl={4} xs={12}>
                    <CardMedia
                        className={classes.cover}
                        alt="Contemplative Reptile"
                        image={props.photo}
                        title="Contemplative Reptile"
                    />
                </Grid>
                <Grid item lg={8} sm={8} md={8} xl={8} xs={12} className={classes.mainContent}>
                    <Box className={classes.titleBox}>
                        <Typography variant="h6">{props.title}</Typography>
                    </Box>
                    <Box className={classes.priceBlock}>
                        <Typography>Цена услуги:</Typography>&nbsp;
                        <Typography style={{ fontWeight: 'bold' }}>{props.price} ₽</Typography>
                        <Typography>Дата и время:</Typography>&nbsp; 
                        <Typography style={{ fontWeight: 'bold' }}>{props.price} ₽</Typography>
                    </Box>
                    <Box className={classes.actionBlock}>
                        <Button variant="contained" style={{ backgroundColor: '#46B944', color: 'white' }}>В корзину</Button>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}