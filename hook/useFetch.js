import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ endpoint, query }) => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "0dd75db604mshbb3bff2b3359bb2p1b81c8jsn58470ffa92c8",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setisLoading(tue);

    try {
      const response = await axios.request(options);
      setdata = response.data.data;
      setisLoading(false);
    } catch (error) {
      setError(error);
      alert("Wystąpił błąd!");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData();
  }

  return {data, isLoading, error, refetch};
};

export default useFetch;