import React, { Fragment } from 'react'
import { getTemp} from '../common/utitlity'
import Weather from '../components/Weather'
import './layout/style.scss'

export default({current}) => {

    return (
       <div className="current">
           {current
           && (
               <Fragment>
                   <span><Weather weather={current.weather[0]}/>,&nbsp;</span>
                   <span>Tempreture: {getTemp(current.temp)}<span>&#8451;</span>,&nbsp;</span>
                   <span>Humidity: {current.humidity},&nbsp;</span>
                   <span>Wind Speed: {current.wind_speed},&nbsp;</span>
               </Fragment>
           )}
       </div>
    )

}