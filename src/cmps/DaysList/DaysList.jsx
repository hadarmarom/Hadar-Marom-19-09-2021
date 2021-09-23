import { useEffect, useState } from 'react'
import './DaysList.scss'

export function DaysList({ day, isFahrenheit, calcToCelsius, isDarkMode }) {

    const [dayInWeek, setDayInWeek] = useState('')

    useEffect(() => {
        var a = new Date(day.dayTimestamp * 1000)
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        setDayInWeek(days[a.getDay()])
    }, [])

    return (
        <li className={isDarkMode ? "day-container dark" : "day-container"}>
            <h4 >{dayInWeek}</h4>
            <div>
                <h4 style={{ transform: isFahrenheit ? "translateX(0)" : "translateX(-130px)", maxWidth: isFahrenheit ? "100%" : "0" }} >{day.temperature.Maximum.Value + " °F"}</h4>
                <h4 style={{ transform: isFahrenheit ? "translateX(130px)" : "translateX(0)", maxWidth: isFahrenheit ? "0" : "100%" }} >{calcToCelsius(day) + " °C"}</h4>
            </div>
        </li >
    )
}
