import React from 'react'

import { Layout, Table } from '../../components'
import { Typography } from '@material-ui/core'

const ServiceHistory = () => {
    return (
        <Layout>
            <Typography variant="h4" style={{ marginBottom: 20 }}>Ваши оплаченные услуги</Typography>
            <Table />
        </Layout>
    )
}

export default ServiceHistory