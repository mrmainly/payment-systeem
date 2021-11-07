import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'

import { Form, Input, Button } from '../index'

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid rgba(0, 0, 0, 0.25)',
        minHeight: 200,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '10px 30px 10px 30px'
    }
}))

const SideBarBasket = () => {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    return (
        <Box className={classes.root}>
            <Typography variant="h6">Оформление заказа</Typography>
            <Form>
                <Input {...register('mail')} id="secondName" type="text" label="Фамилия" />
                <Input {...register('mail')} id="secondName" type="text" label="Фамилия" />
                <Input {...register('mail')} id="secondName" type="text" label="Фамилия" />
                <Input {...register('mail')} id="secondName" type="text" label="Фамилия" />
                <Input {...register('mail')} id="secondName" type="text" label="Фамилия" />
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                    <Typography variant="h6">Общая сумма:</Typography>
                    <Typography variant="h6" style={{ marginLeft: 10 }}>9500 ₽</Typography>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button>Оформить заказ</Button>
                </Box>
            </Form>
        </Box>
    )
}

export default SideBarBasket