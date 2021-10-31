import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import { CardArray } from '../JsonList/CardArray'
import CardCastom from '../components/customElements/CardCustom'

const useStyles = makeStyles(() => ({
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const MainContentCards = () => {
    const classes = useStyles()
    return (
        <Box className={classes.content}>
            {CardArray ? CardArray.map((item, index) => (
                <CardCastom
                    title={item.title}
                    description={item.description}
                    photo={item.photo}
                    status={item.status}
                    price={item.price}
                    key={index}
                    id={item.id}
                />
            )) : ''}
        </Box>
    )
}

export default MainContentCards