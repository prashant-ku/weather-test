import React, { useEffect, Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import { getReportRequest } from '../redux/modules/report'
import WeatherCard from '../WeatherCard'
import CurrentDetails from '../CurrentDetails'
import DailyCard from '../DailyCard'
import './layout/style.scss'

const WeatherDetails = (() => {
  const [position, setPosition] = useState(null)
  const [weekly, setWeekly] = useState(false)
  const [hourly, setHourly] = useState(false)
  const dispatch = useDispatch()
  const reports = useSelector(state => state.report)
  
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude,"  Longitude is :", position.coords.longitude);
        setPosition(position)
      });
    } else {
      console.log("Location Not Available");
    }
  }, [dispatch])

  useEffect(() => {
    if(position) {
      const refTime = process.env.REACT_APP_REFRESH_TIME * 60 * 1000
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      dispatch(getReportRequest({lat, lng}))
      const interval = setInterval(() => {
        dispatch(getReportRequest({lat, lng}))
      }, refTime);
      return () => clearInterval(interval)
    }
  }, [position, dispatch])

  useEffect(() => {
    console.log(reports)
  }, [reports])

  const showWeekly = () => {
    setHourly(false)
    setWeekly(true)
  }

  const showHourly = () => {
    setWeekly(false)
    setHourly(true)
  }

  return (
  <div className="reports">
    {!reports.loading && reports.result && reports.result.lat &&
    (
        <Fragment>
            <h2>Latitude: {reports.result.lat} and Longitude: {reports.result.lon}</h2>
            {reports.result.current && <CurrentDetails current={reports.result.current} />}
            <Button onClick={showWeekly} label="Show Weeks Forcast">Show Weekly</Button>
            <Button onClick={showHourly} label="Show next 48 Hour Forecast">Show Hourly</Button>
            {hourly && reports.result.hourly && <DailyCard reports={reports.result.hourly}/>}
            {weekly && reports.result.daily && <WeatherCard reports={reports.result}/>}
        </Fragment>
    )}
    {reports.loading &&
      (
        <div>Loading...</div>
      )
    }
  </div>
  )
})

export default WeatherDetails