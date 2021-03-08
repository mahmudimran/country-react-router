import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';
import Button from 'react-bootstrap/Button'
import { Card, Container, Image, Row } from 'react-bootstrap';

const Country = (props) => {
    console.log(props.name)
    const {name,capital,flag, callingCodes} = props.country
    
    return (
        <Container>
        
        <div className="country">
            <Image src={flag} alt="" thumbnail />
            <h5 className="mt-2">Name : {name}</h5>
            <p>Capital : {capital}</p>
             <Link to={`/country/${callingCodes}`}>
               
            <Button variant="primary" size="sm" >Show Detail </Button>
            </Link>
            
        </div>
        </Container>
    );
};

export default Country;