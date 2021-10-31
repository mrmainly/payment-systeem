import React, { useState } from 'react'
import { extendMoment } from 'moment-range';
import * as Moment from 'moment';
import { AppBar, Box, Tab, Tabs, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const moment = extendMoment(Moment);
const currentDay = moment(new Date())
const interval = moment.rangeFromInterval('week', 2, currentDay)
const days = Array.from(interval.by('day', { step: 1 }));

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        zIndex: 0
    },
    container: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        flexDirection: 'column'
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}))

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Calendar = () => {
    const classes = useStyles()
    const [scheduleData, setScheduleData] = useState()
    const [value, setValue] = useState(0)
    // const getSchedule = (date) => {
    //     api(``).get()
    //         .then((res) => {
    //             setScheduleData(res.data)
    //             console.log(';', res.data)
    //         }).catch(error => {
    //             console.log(error)
    //         })
    // }
    // useEffect(() => {
    //     getSchedule(days[0].format('YYYY-MM-DD'))
    // }, [])
    const handleChange = (event, newValue) => {
        setValue(newValue)
    };
    return (
        <Box className={classes.container}>
            <AppBar position="relative" color={'inherit'} className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="on"
                    aria-label="scrollable auto tabs example"
                >
                    {days.map((day, index) => {
                        return (
                            <Tab
                                key={index}
                                label={day.format('DD-MM-YYYY')}
                                // onClick={() => getSchedule(day.format('YYYY-MM-DD'))}
                                {...a11yProps(index)}
                            />
                        )
                    })}
                </Tabs>
            </AppBar>

            <Box className={classes.content}>
                {/* {scheduleData ? scheduleData.map((item, index) => (
                    <CardSchudule id={item.id} key={index} dateTime={item.datetime} research={item.research} status={item.status} />
                )) : <CircularProgress style={{ marginTop: 20, marginLeft: 15 }} />}
                {scheduleData?.length < 1 && <Typography variant="h6">На этот день нет доступной записи</Typography>} */}

            </Box>
        </Box>
    )
}

export default Calendar