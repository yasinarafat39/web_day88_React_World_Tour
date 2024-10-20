
import { useState } from "react";
import "./Country.css"

export default function Country({country, handleVisitedCountry, handleVisitedFlags}){

    const [visited, setVisited] = useState(false)

    const handleVisite = () => {
        setVisited(!visited)
    }

    
 
    const {name, flags, population, area} = country;
    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt={`Flag of ${name?.common}`} />
            <h5>Population: {population}</h5>
            <h5>Area: {area}</h5>
            <h5>Capital: </h5>
            <button onClick={() => {handleVisitedCountry(country); handleVisitedFlags(country)}}>Mark as visited</button>
            <button onClick={handleVisite}>{visited ? "Visited" : "Visit"}</button>
            {visited? "I have visited this country." : "I want to visit"} 
        </div>
    )
}