import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import React, { useState } from 'react';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [actualCountries, setActualCountries] = useState(countries);
  // console.log(actualCountries)

  return (
    <div className="App">
      <h1>React WikiCountries </h1>
      <Navbar />
 <CountriesList actualCountries={actualCountries} />
      <Routes>
      <Route path='/countries-details/:alpha3code'
          element={<CountryDetails actualCountries={actualCountries} />}
        />
      </Routes>

     
    </div>
  );
}
export default App;
