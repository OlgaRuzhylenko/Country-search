// {
// flag,
// capital,
// countryName,
// languages = [],
// population,
// }
import styles from './CountryInfo.module.css'
export const CountryInfo = ({countryDetails}) => {
  return (
   
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img className={styles.img} src={countryDetails.flag} alt={countryDetails.countryName} />
      </div>
      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{countryDetails.capital}</span>
        </h3>

        <h1 className={styles.title}>
          {countryDetails.countryName === 'Russian Federation' ? 'MORDOR' : countryDetails.countryName}
        </h1>

        <p className={styles.details}>
          Population: <span className={styles.accent}>{countryDetails.population}</span>
        </p>

        <p className={styles.details}>
          Languages:
          <span className={styles.accent}>{countryDetails.languages.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};
