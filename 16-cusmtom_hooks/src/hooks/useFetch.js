import { useEffect,useState } from "react";


export function useFetch(fetchfunc,initial) {
  const [fetchData, setFetchData] = useState(initial);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
      async function fetchdata() {
        setIsFetching(true);
        try {
          const places = await fetchfunc();
          setFetchData(places);
        } catch (error) {
          setIsFetching(false);
          setError({ message: error.message || 'Failed to fetch user places.' });
        }
  
        setIsFetching(false);
      }
  
      fetchdata();
    }, []);    
    return {
      fetchData,
      setFetchData,
      isFetching,
      error
    }
}
