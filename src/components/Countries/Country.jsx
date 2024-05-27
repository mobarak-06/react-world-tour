import { useEffect, useState } from "react";
import Desh from "../Desh/Desh";
import "./Country.css";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("added country");
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    const newFlag = [...visitedFlag, flag];
    setVisitedFlag(newFlag);
  };

  return (
    <div>
      <h3>desh: {countries.length}</h3>
      <div>
        <h5>Visited Country: {visitedCountry.length}</h5>
        <ul>
          {visitedCountry?.map((item) => (
            <li key={item.cca3}>{item.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-container">
        {visitedFlag?.map((flag, idx) => (
          <img src={flag.flags.png} key={idx}></img>
        ))}
      </div>

      <div className="country-container">
        {countries?.map((item) => (
          <Desh
            key={item.cca3}
            desh={item}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Desh>
        ))}
      </div>
    </div>
  );
};

export default Country;
