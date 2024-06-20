
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';
import EventsPage,{loader as eventsLoader} from './pages/Events';
import EventDetails,{
  loader as idLoader,
  action as deleteEvent
} from './pages/EventDetails';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import EventRoot from './pages/EventRoot';
import ErrorPage from './pages/ErrorPage';
import { action as eventAction } from './components/EventForm';
import NewsletterPage,{action as newsLetterAction}from './pages/NewsLetter';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      errorElement:<ErrorPage/>,
      element:<RootLayout/>,
      children:[
        { 
          index:true, 
          element:<HomePage/>
        },
        {
          path:'events',
          errorElement:<ErrorPage/>,
          element:<EventRoot/>,
          children:[
            { 
              index:true, 
              element:<EventsPage/>,
              loader:eventsLoader
            },
            { 
              path:":id",
              id:'event-detail', 
              loader:idLoader,
              children:[
                { 
                  index:true, 
                  element:<EventDetails/>,
                  action:deleteEvent
                },
                { 
                  path:"edit", 
                  element:<EditEvent/> ,
                  action:eventAction
                },
              ]
            },
        
            { 
              path:"new",
              element:<NewEvent/>, 
              action:eventAction
            },
            
          ]
        },
        {
          path:"newsletter",
          element:<NewsletterPage/>,
          action:newsLetterAction
        }
        
      ]
    }
  ])
  return <><RouterProvider router={router}/></>;
}

export default App;
