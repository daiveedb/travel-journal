import React from "react"

function Card(props){
    return (
        <div className="card">
            <img src={props.entry.imageUrl} className="card-img"/>
            <div className="card-body">
                <div className="location">
                    <img src="./images/map_pin.png"/>
                    <p className="country">{props.entry.location}</p>
                    <a href={props.entry.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card-body--title">{props.entry.title}</h2>
                <h5 className="card-body--date">{props.entry.startDate} - {props.entry.endDate}</h5>
                <p className="description">{props.entry.description}</p>
            </div>
        </div>
    )
}
export default Card
