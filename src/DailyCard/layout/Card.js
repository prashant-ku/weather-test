import React from 'react'
import { getTime, getTemp} from '../../common/utitlity'
import ReportRow from '../../components/ReportRow'
import Weather from '../../components/Weather'
import './style.scss'

export default ({
  report,
}) => {
  return (
    <div className="report-box">
      <div className="report-box-item">
        <div className="property-status-item folder-edit-item">
          <ReportRow>Date: {getTime(report.dt)}</ReportRow>
          <ReportRow>Temp:  {getTemp(report.temp)}<span>&#8451;</span></ReportRow>
          <ReportRow>Humidity:  {report.humidity}</ReportRow>
          <ReportRow>Wind Speed: {report.wind_speed}</ReportRow>
          <ReportRow>Feels Like: {getTemp(report.feels_like)}<span>&#8451;</span></ReportRow>
          <ReportRow>Weather:  <Weather weather={report.weather[0]}/></ReportRow>
        </div>
      </div>
    </div>
  )
}
