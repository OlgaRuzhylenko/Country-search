import { Container, CountryList, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../../service/countryApi';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchCountry.module.css';

export const SearchCountry = () => {
  const [region, setRegion] = useSearchParams();
  const [chosenCoutries, setChosenCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleSearch(value) {
    setRegion({
      query: value,
    });
  }

  useEffect(() => {
    const searchParams = region.get('query');
    if (!searchParams) {
      return;
    }
    async function getCoutriesByRegions() {
      try {
        setLoading(true);
        const data = await fetchByRegion(searchParams);
        setChosenCountries(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCoutriesByRegions();
  }, [region]);

  return (
    <Section>
      <Container>
        <SearchForm onSearch={handleSearch} />
        {error && <p className={styles.error}>Oops, something's wrong</p>}
        {loading && <p className={styles.loading}>Loading countries...</p>}
        <CountryList countries={chosenCoutries} />
      </Container>
    </Section>
  );
};
