import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div onClick={() => navigate("form")} className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Postition : {lat} , {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change Position
      </button>
    </div>
  );
}

export default Map;
