import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
function EventsPage() {
  const {events}=useLoaderData()
  // if(data.isError) return <div>Error: {data.message}</div>
  return (
  <Suspense fallback={<p style={{textAlign:'center'}}>Loadng all events ...</p>}>
    <Await resolve={events}>
      {(loadEvents)=><EventsList events={loadEvents}/>}
    </Await>
  </Suspense>);
}

export default EventsPage;

async function loadEvent(){
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError:true,message:"faild load data"}
    //throw new Response(JSON.stringify({message:"could'nt fetch events"}),{status:500}) 
    throw json({message:"could'nt fetch events"},{status:500});
  } else {
    const  data=await response.json();
    return  data.events
  }
}
export function loader() {
  return defer({
    events:loadEvent()
  })
}