import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
        console.log(json)
      }
      fetchUrl();
    }, [url]);
    return [data, loading];
}

export default useFetch;