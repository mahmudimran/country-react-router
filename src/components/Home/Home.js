import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
      const url = 'https://restcountries.eu/rest/v2/all'
      fetch(url)
      .then(res => res.json())
      .then(data => setCountries(data))
  
    },[])
    return (
        <div>
        <h4 className="text-center mt-3">Country</h4>
      {
        countries.map(country => <Country country={country}></Country>)
      }
        </div>
    );
};

export default Home;