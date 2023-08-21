import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

//   const history = useHistory();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/track/${searchText}`
      );
      const searchResults = response.data;
      console.log(searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  // fetchData fetches data from the fakestoreapi
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=4"
      );
      //   console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider value={{ fetchData, handleSearch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
