import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, MenuItem, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    menuTitle: {
        backgroundColor: 'rgba(68, 119, 146, 1)',
        color: '#fff',
        padding: '5px 10px 5px 20px',
        borderRadius: 5,
    },
    menuItemBox: {
        marginBottom: 20,
        marginTop: 20
    },
    menuItemText: {
        marginTop: 10
    }
}))

const SideBar = () => {
    const classes = useStyles()
    return (
        <Box>
            <Box>
                <Box className={classes.menuTitle}>
                    <Typography variant="body1">Сортировка:</Typography>
                </Box>
                <Box className={classes.menuItemBox}>
                    <MenuItem className={classes.menuItemText}>
                        <Typography variant="body1" >Сначала дешевые</Typography>
                    </MenuItem>
                    <MenuItem className={classes.menuItemText}>
                        <Typography variant="body1">Сначала дешевые</Typography>
                    </MenuItem>
                </Box>
            </Box>
            <Box>
                <Box className={classes.menuTitle}>
                    <Typography variant="body1">Каталог услуг:</Typography>
                </Box>
                <Box className={classes.menuItemBox}>
                    <MenuItem className={classes.menuItemText}>
                        <Typography variant="body1" >Сначала дешевые</Typography>
                    </MenuItem>
                </Box>
            </Box>
        </Box>
    )
}

export default SideBar