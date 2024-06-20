import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
export default function AvailablePlaces({ onSelectPlace }) {
  const [aplace, setAplace] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error,setError]=useState()
  /* useEffect(()=>{
    fetch('http://localhost:3000/places')
    .then((res)=>{
      return res.json()
    })
    .then((resData)=>{
      console.log(resData.places)
      setAplace(resData.places)
    })
  },[]) */
  useEffect(() => {
    async function fetchFunc() {
      setIsFetching(true)
      try{
        const places=await fetchAvailablePlaces()
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlace=sortPlacesByDistance(places,
            position.coords.latitude,
            position.coords.longitude)
            setAplace(sortedPlace)
            setIsFetching(false)
        });
        
      }catch(error){
        console.error(error)
        setError({message:error.message||'undefined message could not able fetch places please try again later.'})
        setIsFetching(false)
      }  
      
    }
    fetchFunc()
  }, [])

  if(error){
    return <Error title="An error occurred" message={error.message}/>
  }

  return (
    <Places
      title="Available Places"
      places={aplace}
      isLoading={isFetching}
      loadingText="places is fetching..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
