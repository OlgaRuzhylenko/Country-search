import { Link } from 'react-router-dom';
import styles from './GoBackBtn.module.css';

export const GoBackBtn = ({ backInfo }) => {
  return (
    <Link to={backInfo} className={styles.btn}>
      Go Back
    </Link>
  );
};
