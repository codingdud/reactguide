import { Await, defer, json,redirect,useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"
import EventsList from "../components/EventsList";
import { Suspense } from "react";
export default function EventDetails() {
  const {event,events}=useRouteLoaderData('event-detail')
  return (<>
  <Suspense fallback={<p style={{textAlign:'center'}}>Loadng event item ...</p>}>
    <Await resolve={event}>
    {(loadEvent)=><EventItem event={loadEvent}/>}
    </Await>
  </Suspense>
  <Suspense fallback={<p style={{textAlign:'center'}}>Loading list ...</p>}>
    <Await resolve={events}>
      {(loadEvents)=><EventsList events={loadEvents}/>}
    </Await>
  </Suspense>
  </>)
}

async function loadevent(id){
  const  response = await fetch('http://localhost:8080/events/'+id)
  if(!response.ok){
    throw json(({message:"could'nt fetch event details"},{status:500}))
  }
  else{
    const  data=await response.json();
    return  data.event
  }
}

async function loadEvents(){
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

export async function loader({resquest,params}){
  const id=params.id;
  return defer({
    event:await loadevent(id),
    events:loadEvents(),
  })
}

export async function  action({request,params}){
  const id=params.id
  const response=await fetch('http://localhost:8080/events/'+id,{
    method:request.method
  })
  console.log(response);
  if(!response.ok){
    throw json({message:"could'nt delete"},{status:500})
  }
  return redirect('/events');
}