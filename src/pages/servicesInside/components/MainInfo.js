import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, MenuItem, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 20,
    },
    tegItem: {
        width: 'max-content',
        padding: 5,
        margin: 5,
        color: '#fff',
        borderRadius: 5
    },
    tegBox: {
        display: 'flex'
    },
    img: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: 10
    },
    imgBox: {
        marginBottom: 5
    }
}))

const MainInfo = () => {
    const classes = useStyles()
    const tegArray = [
        {
            label: '#медицина',
            color: '#ECC58B'
        },
        {
            label: '#медицина',
            color: '#ECC58B'
        },
        {
            label: '#медицина',
            color: '#ECC58B'
        }
    ]
    return (
        <div className={classes.container}>
            <Box className={classes.titleBox}>
                <Typography variant="h5">Исследование организма ДО и ПОСЛЕ вакцинации</Typography>
            </Box>
            {/* <Box className={classes.tegBox}>
                {tegArray.map((item, index) => (
                    <MenuItem key={index} style={{ backgroundColor: item.color }} className={classes.tegItem}>{item.label}</MenuItem>
                ))}
            </Box> */}
            <Box className={classes.imgBox}>
                <img src="/img/Rectangle170.png" className={classes.img} />
            </Box>
        </div>
    )
}

export default MainInfo