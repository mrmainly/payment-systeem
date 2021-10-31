import React from 'react'
import { Box, Typography, TextareaAutosize, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../../components/layout/Layout'
import { Form } from '../../components/customElements/Form'
import { Input } from '../../components/customElements/Input'
import ButtonCustom from '../../components/customElements/ButtonCustom'

const useStyles = makeStyles((theme) => ({
    titleBox: {
        textAlign: 'center',
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'column'
    },
    FormBox: {
        width: '70%',
        marginTop: 30,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
}))

const TechSup = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Box className={classes.container}>
                <Box className={classes.titleBox}>
                    <Typography variant="h6">Остались вопросы?</Typography>
                    <Typography variant="body1">ответим на дополнительные вопросы в специальной форме, там же можно написать отзыв об платформе и поделится рекомендациями по улучшению сервиса.</Typography>
                </Box>
                <Box className={classes.FormBox}>
                    <Form>
                        <Input label="Тема" />
                        <TextField
                            id="outlined-multiline-static"
                            label="Ваше сообщение"
                            multiline
                            fullWidth
                            rows={10}
                            defaultValue=""
                            variant="outlined"
                            color='primary'
                        />
                        <Box style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ButtonCustom>Отправить сообщение</ButtonCustom>
                        </Box>
                    </Form>
                </Box>
            </Box>
        </Layout>
    )
}

export default TechSup