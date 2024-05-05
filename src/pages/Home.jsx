import { Container, CountryList, Heading, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from '../service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries();
        setCountries(data)
      } catch (error) {
      } finally {
      }
      
    }
    fetchCountries();
  },[]);

  return (
    <Section>
      <Container>
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};
