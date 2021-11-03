import React, { useContext, } from 'react'
import { Dialog, Typography, Box, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { DispatchContext, StateContext } from '../../store'
import API from '../../api'
import { Form, Input, Button } from '../index'

const useStyles = makeStyles((theme) => ({
    DialogContent: {
        display: 'flex',
        alignItmes: 'center',
        width: 300,
        minHeight: 350,
        padding: 20,
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            width: 240,
            padding: 10
        },
    },
    linkStyle: {
        cursor: 'pointer',
        marginLeft: 5,

    }
}))

const ForgotModal = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const router = useHistory()
    const classes = useStyles()
    const hundleClose = () => {
        dispatch({ type: 'authModal', payload: { forgot: false } })
    }
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data) => {
        API.forgotRegister({ ...data }, dispatch, router)
    }
    return (
        <Dialog aria-labelledby="simple-dialog-title" open={state.authModal.forgot} onClose={hundleClose}>
            <div className={classes.DialogContent}>
                <Typography variant="body1" style={{ fontWeight: 'bold', marginBottom: 10 }}>Регистрация</Typography>
                <Typography variant="body1" style={{ borderBottom: '0.5px solid rgba(0, 0, 0, 0.25)', width: 180, margin: '0 auto' }}>Платные услуги РБ1</Typography>
                <Typography variant="body2" style={{ fontWeight: 'bold', marginTop: 10 }}>Мы отправили письмо с кодом подтверждения на вашу электронную почту</Typography>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('code')} id="code" type="text" label="Код" />
                    <Box style={{ marginTop: 10, marginBottom: 20 }}>
                        <Button>Продолжить</Button>
                    </Box>
                </Form>
                <MenuItem style={{ width: 'max-content', margin: '0 auto' }}>Назад</MenuItem>
            </div>
        </Dialog >
    )
}

export default ForgotModal