import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetails = () => {
    const {countryId} = useParams();
    const [country, setCountry] = useState({})
    const {name, population,flag,capital,region,numericCode,callingCodes,area,altSpellings, currencies,languages } = country
    useEffect(()=>{
        const url =(`https://restcountries.eu/rest/v2/callingcode/${countryId}
        `)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data[0]))
    },[])
    
    return (
        <Container>
             <Row>
             <Col xs={6}>
             <h4 className="mt-3">Country details Information</h4>
            <Card style={{ width: '18rem' }}>
                
            <Card.Img variant="top" src={flag} />
            <Card.Body>
                <Card.Title>Name : {name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Capital : {capital}</ListGroupItem>
                <ListGroupItem>Region : {region}</ListGroupItem>
                <ListGroupItem>Population : {population}</ListGroupItem>
                <ListGroupItem>NumericCode : {numericCode}</ListGroupItem>
                <ListGroupItem>CallingCodes : {callingCodes}</ListGroupItem>
                <ListGroupItem>Area : {area}</ListGroupItem>
                <ListGroupItem>Currencies : {country.currencies?.map(currency => <span>{currency.code}</span>)}</ListGroupItem>
                <ListGroupItem>altSpellings : {country.altSpellings?.map(spelling => <span>{spelling[1]}</span>)}</ListGroupItem>
                <ListGroupItem>Languages : {country.languages?.map(language => <span>{language.name}</span>)}</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Link to="/home">
            <Button variant="success" size="sm">Back To Home</Button></Link>
            </Card.Body>
            </Card>


            </Col>
            </Row>

        </Container>
    );
};

export default CountryDetails;