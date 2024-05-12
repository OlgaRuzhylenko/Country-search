import { Container, CountryInfo, Section } from 'components';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from '../../service/countryApi';
import { useEffect, useState } from 'react';
import { GoBackBtn } from '../../components/GoBackBtn/GoBackBtn';
import styles from './Country.module.css';

export const Country = () => {
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  //тут зберігається значення звідки ми прийшли
  const backInfo = location?.state?.from ?? '/';
  useEffect(() => {
    async function getCountryDetails() {
      try {
        setLoading(true);
        const data = await fetchCountry(countryId);
        setCountryDetails(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCountryDetails();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn backInfo={backInfo} />
        <div className={styles.container}>
          {error && <p className={styles.error}>Please, visit our Home page</p>}
          {loading && <p className={styles.loading}>Loading information...</p>}
        </div>
        {countryDetails && <CountryInfo countryDetails={countryDetails} />}
      </Container>
    </Section>
  );
};
