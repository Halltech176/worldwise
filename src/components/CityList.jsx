import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import PropTypes from "prop-types";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities?.length)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CityList;
