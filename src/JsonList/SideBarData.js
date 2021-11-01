const SideBarData = () => {
    const data = [
        {
            title: 'Все услуги',
            open: true,
            menuItems: [
                {
                    label: 'хаха',
                    link: '/foq'
                }
            ]
        },
        {
            title: 'МРТ',
            open: false,
            menuItems: [
                {
                    label: 'хахsа',
                    link: '/foq'
                }
            ]
        },
        {
            title: 'КТ',
            open: false,
            menuItems: [
                {
                    label: 'ads',
                    link: '/asd'
                },
                {
                    label: 'ads',
                    link: '/asd'
                }
            ]
        }
    ]
    return data
}

export default SideBarData