import { Link } from "react-router-dom";

export const GoBackBtn = ({backInfo}) => {
  return (
    <Link to={backInfo}>
    Go Back 
    </Link>
  );
};
