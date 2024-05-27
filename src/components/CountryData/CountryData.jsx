

const CountryData = ({desh, handleVisitedCountry, handleVisitedFlag}) => {
    console.log('inside country', desh, handleVisitedCountry, handleVisitedFlag);
    return (
        <div>
           <p><small>country data: {desh?.name?.common}</small></p>
           <hr />

        </div>
    );
};

export default CountryData;