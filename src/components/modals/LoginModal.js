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

const LoginModal = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const classes = useStyles()
    const hundleClose = () => {
        dispatch({ type: 'authModal', payload: { login: false } })
    }
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data) => {
        console.log('asdasd', data)
    }
    return (
        <Dialog aria-labelledby="simple-dialog-title" open={state.authModal.login} onClose={hundleClose}>
            <div className={classes.DialogContent}>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>Вход</Typography>
                <Typography variant="body1">Платные услуги РБ1</Typography>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('mail')} id="secondName" type="text" label="Электронная почта" />
                    <Input {...register('password')} id="firstName" type="text" label="Пароль" />
                    <Box style={{ marginTop: 10, marginBottom: 10 }}>
                        <ButtonCustom>Далее</ButtonCustom>
                    </Box>
                </Form>
                <MenuItem style={{ width: 'max-content', margin: '0 auto' }}>Забыли пароль</MenuItem>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="body1">Есть профиль?</Typography>
                    <MenuItem className={classes.linkStyle} onClick={() => { dispatch({ type: 'authModal', payload: { register: true, login: false } }) }}>Регистрация</MenuItem>
                </Box>
            </div>
        </Dialog>
    )
}

export default LoginModal