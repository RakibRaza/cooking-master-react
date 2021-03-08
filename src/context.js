import { useState, useContext, useEffect, createContext } from "react";
import { useCallback } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [meals, setMeals] = useState([]);

  const fetchMeals = async (keyword) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}${keyword}`);
      const data = await res.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals("a");
  }, []);
  return (
    <AppContext.Provider
      value={{ meals, keyword, setKeyword, fetchMeals, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
