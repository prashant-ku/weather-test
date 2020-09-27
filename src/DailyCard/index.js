import React, { Fragment } from 'react'
import Card from './layout/Card'
import './layout/style.scss'

export default({reports}) => {

    return (
        <div className="reports">
            {reports && reports.length > 0 &&
            (
            <Fragment>
                <h2>Hourly Details</h2>
                { reports &&
                reports.map((value, i) => {
                    return <Card 
                    key={i}
                    report={value} />
                })
                }  
            </Fragment>
            )}
        </div>
    )

}