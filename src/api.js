import axios from 'axios';
import cookie from 'js-cookie'

const testURL = 'http://127.0.0.1:8000/'
const publicURL = 'http://backend:8000/'

const api = (url) => {
    const token = cookie.get('jwttoken')
    if (token) {
        const instance = axios.create({
            baseURL: testURL + url,
            headers: {
                'Authorization': "Token " + token,
                'Content-Type': 'application/json'
            },
        })
        return instance
    } else {
        const instance = axios.create({
            baseURL: testURL + url,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return instance
    }
}

class API {
    getToken({ mail, password }, dispatch, router) {
        api('api/v1/token/auth/').post(null, {
            email: mail,
            password: password
        }).then(res => {
            cookie.set('jwttoken', res.data.token)
            router.push('/form-profile')
            dispatch({ type: 'login', payload: { mail: res.data.email } })
        }).catch(() => { dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'такокго пользователя не существует' } }) })
    }
}

export default new API()