import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

import { useCities } from "../../context/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
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

export default CityList;
