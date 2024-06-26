import React from 'react'
import { useParams } from 'react-router'
import data from '../../sfpopos-data.js'
import './POPOSDetails.css'
import POPOSFeatureList from '../POPOSFeatures/POPOSFeatureList'

function POPOSDetails(props) {
    const params = useParams()
    const { id } = params
    const { images, title, desc, hours, features, geo } = data[id]

    return (
        <article className="POPOSDetails">
            <div className="POPOSDetails-image">
                <img src={`${process.env.PUBLIC_URL}/images/${images}`} alt={title} />
            </div>
            <div className="POPOSDetails-info">
                <h1 className="POPOSDetails-title">{ title }</h1>
                <p className="POPOSDetails-desc">{ desc }</p>
                <p className="POPOSDetails-hours">{ hours }</p>
                <POPOSFeatureList features={ features }/>
                <p className='POPOSDetails-geo'>{ geo.lat } {geo.lon}</p>
            </div>
        </article>
    )
}

export default POPOSDetails