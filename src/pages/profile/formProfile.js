import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Box, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

import { Layout, Form, Input, Button } from '../../components'
import Cookies from 'js-cookie'

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
    const history = useHistory()
    const classes = useStyles()
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
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
                    <TextField id={"outlined-basic"} label={"Дата рождения"} type={"date"} required fullWidth defaultValue={"2020-02-20"} variant={"outlined"}
                        margin="normal"
                        {...register('birth_date')}
                        id="birth_date"
                        error={!!errors.birth_date}
                    />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Пол</FormLabel>
                        <Controller
                            {...register('gender')}
                            defaultValue="муж"
                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup {...field}>
                                    <FormControlLabel
                                        value="муж"
                                        control={<Radio />}
                                        label="муж"
                                    />
                                    <FormControlLabel
                                        value="жен"
                                        control={<Radio />}
                                        label="жен"
                                    />
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                    <Input {...register('phone')} id="phone" type="number" label="Ваш номер телефона" />

                    <Input {...register('mail')} id="secondName" type="text" label="Электронная почта" />
                </Box>
                <Box style={{ marginTop: 20 }}>
                    <Button>Сохранить</Button>
                </Box>
            </Form>
            <Box className={classes.buttonStyle}>
                <Button variant="contained" color="primary" onClick={() => {
                    Cookies.remove('jwttoken')
                    history.push('/')
                }}>Выйти</Button>
            </Box>
        </Layout>
    )
}

export default FormProfile