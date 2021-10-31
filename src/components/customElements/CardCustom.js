import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 290,
        marginTop: 20,
        borderRadius: 5,
        minHeight: 350,
        marginLeft: 5,
        marginRight: 5,
    },
    cover: {
        height: 140,
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
    descriptionBlock: {
        wordWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: 10,
        height: 100,
    },
    priceBlock: {
        display: 'flex',
    },
    actionBlock: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default function CardCastom(props) {
    const classes = useStyles();
    const history = useHistory()
    return (
        <Card className={classes.root}>
            <Grid container>
                <Grid item lg={12} sm={12} md={12} xl={12} xs={12}>
                    <CardMedia
                        className={classes.cover}
                        alt="Contemplative Reptile"
                        image={props.photo ? props.photo : '/image/XVP.jpg'}
                        title="Contemplative Reptile"
                    />
                </Grid>
                <Grid item lg={12} sm={12} md={12} xl={12} xs={12} className={classes.mainContent}>
                    <Box className={classes.titleBox}>
                        <Typography variant="body1">{props.title}</Typography>
                    </Box>
                    <Box className={classes.descriptionBlock}>
                        <Typography variant="body2">{props.description}</Typography>
                    </Box>
                    <Box className={classes.priceBlock}>
                        <Typography>Цена: </Typography>&nbsp;
                        <Typography style={{ fontWeight: 'bold' }}>{props.price} ₽</Typography>
                    </Box>
                    <Box className={classes.actionBlock}>
                        <Button variant="contained" style={{ backgroundColor: '#46B944', color: 'white' }}>В корзину</Button>
                        <Button variant="contained" style={{ backgroundColor: 'rgba(69, 154, 232, 1)', color: 'white' }} onClick={() => {
                            history.push(`/service-inside/${props.id}`)
                        }}>Подробнее</Button>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}