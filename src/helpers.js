import dayjs from 'dayjs'
import weekday  from 'dayjs/plugin/weekday'

// CONSTANT
import { WEEK_DAYS } from './constants'

dayjs.extend(weekday)

export const tempFormat = (num) => `${Math.round((num + Number.EPSILON) * 100) / 100} °C`

export const dateFormat = (date) => WEEK_DAYS[dayjs(date).weekday()]
