import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const BASE_URL = "http://localhost:8000";

  const [cities, setCities] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch {
        console.log("there is an error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch {
      console.log("there is an error");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCities((cities) => [...cities, data]);
      console.log(data);
    } catch {
      console.log("there is an error");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setCities((cities) => cities.filter((city) => city.id !== id));
      console.log(data);
    } catch {
      console.log("there is an error deleting city");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        deleteCity,
        isLoading,
        getCity,
        createCity,
        currentCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities context was used outside the cities provider");

  return context;
};

export { CitiesProvider, useCities };
