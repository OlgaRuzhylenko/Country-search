import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from '../../service/countryApi';
import styles from './Home.module.css';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        {error && <p className={styles.error}>Please visit our Home page</p>}
        {loading && <p className={styles.loading}>Loading countries...</p>}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
