import React, { useContext, } from 'react'
import { Dialog, Typography, Box, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'

import { DispatchContext, StateContext } from '../../store'
import API from '../../api'

import { Form, Input, Button } from '../index'

const useStyles = makeStyles((theme) => ({
    DialogContent: {
        display: 'flex',
        alignItmes: 'center',
        width: 300,
        minHeight: 400,
        padding: 20,
        flexDirection: 'column',
        textAlign: 'center',
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

const RegisterModal = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const classes = useStyles()
    const hundleClose = () => {
        dispatch({ type: 'authModal', payload: { register: false } })
    }
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    const onSubmit = ({ password, firstName, secondName, patronymic, email, phone, forgotPassword }) => {
        if (forgotPassword == password) {
            API.register({ password, firstName, secondName, patronymic, email, phone }, dispatch)
        } else {
            dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'пароль должен состоять минимум из 8 символов' } })
        }
    }
    return (
        <Dialog aria-labelledby="simple-dialog-title" open={state.authModal.register} onClose={hundleClose}>
            <div className={classes.DialogContent}>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>Регистрация</Typography>
                <Typography variant="body1">Платные услуги РБ1</Typography>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('secondName')} id="secondName" type="text" label="Фамилия" />
                    <Input {...register('firstName')} id="firstName" type="text" label="Имя" />
                    <Input {...register('patronymic')} id="patronymic" type="text" label="Отчество" />
                    <Input {...register('email')} id="mail" type="text" label="Электронная почта" />
                    <Input {...register('phone')} id="phone" type="number" label="Номер телефона" />
                    <Input {...register('password')} id="password" type="password" label="Пароль" />
                    <Input {...register('forgotPassword')} id="forgotPassword" type="password" label="Проверка пароля" />
                    <Box style={{ marginTop: 10, marginBottom: 10 }}>
                        <Button>Далее</Button>
                    </Box>
                </Form>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="body1">Есть профиль?</Typography>
                    <MenuItem className={classes.linkStyle} onClick={() => { dispatch({ type: 'authModal', payload: { register: false, login: true } }) }}>Вход</MenuItem>
                </Box>
            </div>
        </Dialog>
    )
}

export default RegisterModal