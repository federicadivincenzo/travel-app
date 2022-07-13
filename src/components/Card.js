import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.title}/>
            <div className="right-card--text">
            <p className="location"><i className="fa-solid fa-location-dot"></i> <span>{props.location.toUpperCase()} <a href={props.googleMapsUrl}>View on Google Maps</a></span></p>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--date">{props.startDate} - {props.endDate}</p>
            <p className="card--description">{props.description}</p>

            </div>
        </div>
    )

}
