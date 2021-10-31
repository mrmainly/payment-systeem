import React, { useContext, } from 'react'
import { Dialog, Typography, Box, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'

import { DispatchContext, StateContext } from '../../store'
import { Form } from '../customElements/Form'
import { Input } from '../customElements/Input'
import ButtonCustom from '../customElements/ButtonCustom'

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
    const onSubmit = (data) => {
        console.log('asdasd', data)
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
                    <Input {...register('mail')} id="mail" type="text" label="Электронная почта" />
                    <Input {...register('phone')} id="phone" type="number" label="Номер телефона" />
                    <Box style={{ marginTop: 10, marginBottom: 10 }}>
                        <ButtonCustom>Далее</ButtonCustom>
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