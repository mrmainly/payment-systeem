import React from 'react'
import { useForm } from 'react-hook-form'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Layout, Form, Input, Button } from '../../components'

const useStyles = makeStyles((theme) => ({
    inputBox: {
        width: 350,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    buttonStyle: {
        marginTop: 20,
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    }
}))

const schema = yup.object().shape({
    firstName: yup.string().matches(/^([^0-9]*)$/, 'aboba').required('asd'),
    secondName: yup.string().matches(/^([^0-9]*)$/, 'aboba').required('asd'),
    patronymic: yup.string().matches(/^([^0-9]*)$/, 'aboba').required('asd'),
})

const FormProfile = () => {
    const classes = useStyles()
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        console.log('asdasd', data)
    }
    return (
        <Layout>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Box className={classes.inputBox}>
                    <Input {...register('secondName')} id="secondName" type="text" label="Фамилия" error={!!errors.secondName} helperText={errors?.secondName?.message} />
                    <Input {...register('firstName')} id="firstName" type="text" label="Имя" error={!!errors.firstName} helperText={errors?.firstName?.message} />
                    <Input {...register('patronymic')} id="patronymic" type="text" label="Отчество" error={!!errors.patronymic} helperText={errors?.patronymic?.message} />
                    <Input {...register('phone')} id="secondName" type="number" label="Ваш номер телефона" />
                </Box>
                <Box style={{ marginTop: 20 }}>
                    <Button>Сохранить</Button>
                </Box>
            </Form>
            <Box className={classes.buttonStyle}>
                <Button variant="contained" color="primary">Выйти</Button>
            </Box>
        </Layout>
    )
}

export default FormProfile