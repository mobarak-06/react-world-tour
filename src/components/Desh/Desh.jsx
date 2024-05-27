import { useState } from 'react';
import './Desh.css'
import CountryDetails from '../CountryDetails/CountryDetails';
const Desh = ({
    desh, handleVisitedCountry, handleVisitedFlag}) => {
    console.log(desh);
    const {name, flags, population, area, cca3} = desh;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'} ${'box'}`}>
            <h3 style={{color:visited? 'red' : 'black'}}>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>handleVisitedFlag(desh)}>Add flags</button>
            <br />
            <button onClick={() => handleVisitedCountry(desh)}>
                Mark Visited
            </button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I Have Visited': 'Not Visited'}
            <hr />
            <CountryDetails desh={desh}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlag={handleVisitedFlag}>
               
            </CountryDetails>
            
        </div>
    );
};

export default Desh;