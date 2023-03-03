import { Link } from 'react-router-dom';

function CountriesList({ actualCountries }) {
  return (
    <div>
      <h2>Paises</h2>

      {actualCountries.map((eachElement) => {
        return (
          <div>
          <Link to={`/countries-details/${eachElement.alpha3Code}`}>{eachElement.name.common} </Link>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachElement.alpha2Code.toLowerCase()}.png`}alt={eachElement.name.common} />
                
             
            
            
           
            
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
