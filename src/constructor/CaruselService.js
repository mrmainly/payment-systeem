import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import Slider from 'react-slick'

import { CardCastom } from '../components'
import { CardArray } from '../JsonList/CardArray'


const CaruselService = () => {
    const [slidesToShow, setSlidesToShow] = useState()
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true
    };
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1290 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            }
            else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })

    return (
        <Box style={{ overflow: 'hidden' }}>
            <Slider {...settings} >
                {CardArray ? CardArray.map((item, index) => (
                    <Box style={{ margin: '0 auto' }}>
                        <CardCastom
                            title={item.title}
                            description={item.description}
                            photo={item.photo}
                            status={item.status}
                            price={item.price}
                            key={index}
                            id={item.id}
                        />
                    </Box>
                )) : ''}
            </Slider>
        </Box>
    )
}

export default CaruselService