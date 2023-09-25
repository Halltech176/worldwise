import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import PropTypes from "prop-types";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities?.map((city, index) => {
        console.log(city);
        return <li key={index}></li>;
      })}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CityList;
