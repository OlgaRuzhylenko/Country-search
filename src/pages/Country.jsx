import { Container, CountryInfo, Heading, Section } from 'components';
import { useLocation, useParams } from 'react-router-dom';
import {fetchCountry} from '../service/countryApi'
import { useEffect, useState } from 'react';
import {GoBackBtn} from '../components/GoBackBtn/GoBackBtn'

export const Country = () => {
  const {countryId} = useParams();
  const [countryDetails, setCountryDetails]= useState(null)
  const location = useLocation();
  //тут зберігається значення звідки ми прийшли
const backInfo = location?.state?.from ?? '/'
console.log(backInfo);
  useEffect(() => {
    async function getCountryDetails() {
      try {
        const data = await fetchCountry(countryId);
       setCountryDetails(data)
      } catch (error) {
      } finally {
      }
      
    }
    getCountryDetails();
  },[countryId]);


  return (
    <Section>
      <Container>
        <GoBackBtn backInfo={backInfo}/>
       {countryDetails && <CountryInfo countryDetails={countryDetails}/>}
      </Container>
    </Section>
  );
};
