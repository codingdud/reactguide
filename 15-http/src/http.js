export async function fetchAvailablePlaces() {
    const res = await fetch('http://localhost:3000/places')
      const resData = await res.json()
      if (!res.ok) {
        throw new Error("fail to fetch places")
      }
      return resData.places
  }
  export async function updateUserPlace(places) {
    const res = await fetch('http://localhost:3000/user-places',{
        method:'PUT',
        body:JSON.stringify({places:places}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data=await res.json();
      if (!res.ok) {
        console.log("error->",res)
        throw new Error("fail to update user data")
      }
      return data.message
  }
  export async function fetchUserPlaces() {
    const res = await fetch('http://localhost:3000/user-placess')
      const resData = await res.json()
      if (!res.ok) {
        throw new Error("fail to fetch user places")
      }
      return resData.places
  }