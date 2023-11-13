import { useEffect, useState } from "react";
import axios from "axios";

const useFetch1 = (url) => {
  const [data1, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch1 = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  
  return { data1, loading, error, reFetch1 };
     
};

export default useFetch1;