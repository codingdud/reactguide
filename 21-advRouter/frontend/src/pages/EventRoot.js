import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'
export default function EventRoot() {
  return (<div>
    <EventsNavigation/>
    <Outlet/>
  </div>)
}
