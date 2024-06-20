import { Suspense } from 'react'
import EventForm from '../components/EventForm'
import { Await, useRouteLoaderData } from 'react-router-dom'
export default function EditEvent() {
  const {event}=useRouteLoaderData('event-detail')
  return (
  <Suspense fallback={<p style={{textAlign:'center'}}>loading edit form ...</p>}>
    <Await resolve={event}>
    {(loadEvent)=><EventForm event={loadEvent} method='patch'/>}
    </Await>
  </Suspense>
  )
}
