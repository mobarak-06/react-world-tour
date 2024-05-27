import CountryData from "../CountryData/CountryData";


// const CountryDetails = ({desh, handleVisitedCountry, handleVisitedFlag}) => {
const CountryDetails = (props) => {
    // console.log(desh);

    return (
        <div>
           <h4>Country Details</h4> 
           <hr />
           {/* <CountryData desh={desh}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}> */}
            
           {/* </CountryData> */}

           <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;