import React from 'react'
import { useForm } from 'react-hook-form'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Layout, Form, Input, Button } from '../../components'

const useStyles = makeStyles((theme) => ({
    inputBox: {
        width: 350,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    }
}))

const ChangePassword = () => {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data) => {
        console.log('asdasd', data)
    }
    return (
        <Layout>
            <Form>
                <Box className={classes.inputBox}>
                    <Input {...register('password')} id="password" type="text" label="Введите текущий пароль" />
                    <Input {...register('newPassword')} id="newPassword" type="text" label="Введите новый пароль" />
                </Box>
                <Box style={{ marginTop: 20 }}>
                    <Button>Сохранить</Button>
                </Box>
            </Form>
        </Layout>
    )
}

export default ChangePassword