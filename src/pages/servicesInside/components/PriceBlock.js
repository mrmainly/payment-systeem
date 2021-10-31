import React from 'react'

import { Typography, Box } from '@material-ui/core'

import ButtonCustom from '../../../components/customElements/ButtonCustom'

const PriceBlock = () => {

    return (
        <div style={{ display: 'flex', marginTop: 20, flexDirection: 'column' }}>
            <Box style={{ display: 'flex' }}>
                <Typography variant="h6">Цена услуги: </Typography>
                <Typography variant="h6" style={{ marginLeft: 20 }}>2000 ₽</Typography>
            </Box>
            <Box style={{ marginTop: 20 }}>
                <ButtonCustom>Добавить в корзину</ButtonCustom>
            </Box>
        </div>
    )
}

export default PriceBlock