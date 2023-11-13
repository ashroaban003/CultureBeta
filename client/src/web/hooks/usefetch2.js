import { useEffect, useState } from "react";
import axios from "axios";

const useFetch2 = (url) => {
  const [data2, setData] = useState([]);
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

  const reFetch2 = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  
  return { data2, loading, error, reFetch2 };
     
};

export default useFetch2;