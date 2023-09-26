import styles from "./CountryList.module.css";
import Spinner from "../components/Spinner";
import PropTypes from "prop-types";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities?.length)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries?.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CountryList;
