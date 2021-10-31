import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    btn: {
        color: '#fff',
        border: 0,
        height: 40,
        padding: '0 20px',
        borderTopLeftRadius: 15,
        borderEndEndRadius: 15,
        '&:focus': {
            outline: "none",
        },
        fontSize: 14,
        backgroundColor: 'rgba(70, 185, 68, 1)'
    }
}));

const ButtonCustom = ({ props, children }) => {
    const classes = useStyles()
    return (
        <Button type="submit" variant="contained" className={classes.btn} {...props} >
            {children}
        </Button>
    )
}

export default ButtonCustom