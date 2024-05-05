import { Container, CountryList, Heading, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/countryApi';
import { useSearchParams } from 'react-router-dom';

export const SearchCountry = () => {
  const [region, setRegion] = useSearchParams();
  const [chosenCoutries, setChosenCountries] = useState([]);

  function handleSearch(value) {
    setRegion({
      query: value,
    });
  }

  useEffect(() => {
    const searchParams = region.get('query')
    if (!searchParams) {
      return;
    }
    async function getCoutriesByRegions() {
      try {
        const data = await fetchByRegion(searchParams);
        console.log(data);
        setChosenCountries(data);
      } catch (error) {
      } finally {
      }
    }
    getCoutriesByRegions();
  }, [region]);

  return (
    <Section>
      <Container>
        <SearchForm onSearch={handleSearch} />
        <CountryList countries={chosenCoutries}/>
      </Container>
    </Section>
  );
};
