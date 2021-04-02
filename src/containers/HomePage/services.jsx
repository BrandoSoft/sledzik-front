import Axios from 'axios';
import React,{useEffect, useState} from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-weight: 900;
  color: #000;
  
`;


export function Services(props){

const [offeredServices, setOfferedServices] = useState([]);

const isServicesEmpty = !offeredServices || (offeredServices && offeredServices.length === 0)

const fetchServices =async() => {
  const response = await Axios.get("http://localhost:9000/services").catch((err) => {
console.log("error", err)
  })

  if (response) {
    console.log("Response", response.data)
  }
}

  useEffect(() => {
    fetchServices()
  }, [])

return(
    <ServicesContainer>
    <Title>Takie tam</Title>
        <ServicesWrapper>
            
        </ServicesWrapper>
    </ServicesContainer>
   
)
}