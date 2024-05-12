import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const handleChangeInput = evt => {
    setQuery(evt.target.value);
  };
  const handleFormSubmit = evt => {
    evt.preventDefault();
    onSearch(query);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        onChange={handleChangeInput}
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => (
          <option value={region.value} key={region.id}>
            {region.name}
          </option>
        ))}
      </select>
    </form>
  );
};
