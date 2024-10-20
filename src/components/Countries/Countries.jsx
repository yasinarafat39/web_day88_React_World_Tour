import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])
  const [visitedFlags, setFlags] = useState([])
 
 
  console.log(visitedFlags)

  const handleVisitedCountry = country => { 
    // const {name, flags, population, area} = country;
    // console.log(name?.common)
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries) 
  }
  
  const handleVisitedFlags = (country) =>{
    const {name, flags, population, area} = country;
    let newFlags = [...visitedFlags, flags?.png]
    setFlags(newFlags) 
  }
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  
  return (
    <div>
      <h1>React World Tour</h1>
      <p>Countries: {countries.length}</p>

      {
        visitedFlags.map((flag, index) => <div key={index} style={{display: "flex", flexWrap: "wrap"}}>
          <img src={flag}></img>
        </div>)
      }

      <div  className="countryContainer">
        {countries.map((country) => (
          <Country country={country} key={country?.name?.common} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>
        ))}
      </div>
    </div>
  );
}

/**
 * 1. declare a state for hold you data
 * 2. import useEffect() to deal asynchronous task or handle side effect or outside effect
 * 3. fetch data using API
 * 4. store data to the state
 * 5. display data
*/
