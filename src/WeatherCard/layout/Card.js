import React from 'react'
import {getlocaldate, getdate, getTemp} from '../../common/utitlity'
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
          <ReportRow>Date: {getdate(report.dt)}</ReportRow>
          <ReportRow>Min Temp:  {getTemp(report.temp.min)}<span>&#8451;</span></ReportRow>
          <ReportRow>Max Temp:  {getTemp(report.temp.max)}<span>&#8451;</span></ReportRow>
          <ReportRow>Sunrise: {getlocaldate(report.sunrise)}</ReportRow>
          <ReportRow>Sunset:  {getlocaldate(report.sunset)}</ReportRow>
          <ReportRow>Feels Like: {getTemp(report.feels_like.day)}<span>&#8451;</span></ReportRow>
          <ReportRow>Weather:  <Weather weather={report.weather[0]}/></ReportRow>
        </div>
      </div>
    </div>
  )
}
