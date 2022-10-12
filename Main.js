import React from 'react'
import data from "./data.js"
import Card from './Card.js'

function Main(){
    const entries = data.map(entry => {
        return (
            <div>
                <Card 
                key={entry.id}
                entry={entry}
                />
                <hr/>
            </div> 
        )
    })
    return(
        <div className="main">
            {entries} 
        </div>
      
    )
}
export default Main