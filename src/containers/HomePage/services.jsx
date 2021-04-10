import Axios from 'axios';
import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { ServiceCard } from '../../components/serviceCard/serviceCard';
import { Button } from "../../components/button/button";

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

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;
  &:hover {
    background-color: #f2f2f2;
    filter: contrast(0.8);
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;


const wait = (num) => new Promise((rs)=> setTimeout(rs,num))

export function Services(props){

const [offeredServices, setOfferedServices] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const isServicesEmpty = !offeredServices || (offeredServices && offeredServices.length === 0)

const fetchServices =async() => {
  const response = await Axios.get("http://localhost:9000/services").catch((err) => {
console.log("error", err)
  })

await wait(1000);

  if (response) {
    setOfferedServices(response.data)
  }

  setIsLoading(false)

}

  useEffect(() => {
    fetchServices()
  }, [])

return(
    <ServicesContainer>
    <Title>Lista śledzonych kotów</Title>
        <ServicesWrapper>
            {isServicesEmpty && !isLoading &&(
            <WarningText>Brak zawartości do wyswietlenia</WarningText>
            )}
             {isLoading && <WarningText>Loading...</WarningText>  }

             {!isServicesEmpty && !isLoading && offeredServices.map((service,idx) =>(
               <ServiceCard key={idx} {...service}/>)
             )
             }
        </ServicesWrapper>
        <BottomContainer>
        {!isServicesEmpty && !isLoading && (
          <ViewMoreButton>Załaduj więcej</ViewMoreButton>
        )}
        </BottomContainer>        
    </ServicesContainer>
   
)
}