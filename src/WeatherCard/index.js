import React, { Fragment } from 'react'
import Card from './layout/Card'
import './layout/style.scss'

export default (({reports}) => {

  return (
  <div className="reports">
    {reports && 
    (
      <Fragment>
        <h2>Weekly Details</h2>
        { reports.daily &&
          reports.daily.map((value, i) => {
             return <Card 
              key={i}
              report={value} />
          })
        }  
      </Fragment>
    )}
  </div>
  )
})
