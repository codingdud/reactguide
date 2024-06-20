import { Link, useNavigate, Outlet, useParams } from 'react-router-dom';
import { useQuery,useMutation } from '@tanstack/react-query';
import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';
export default function EventDetails() {
  const [isDeleting,setisDeleting]=useState(false)
  const navigate=useNavigate()
  const param=useParams();
  const{data,isPending,isError,error}=useQuery({
    queryKey:['events',param.id],
    queryFn:({signal})=>fetchEvent({signal,id:param.id}),
  })

  const{mutate,
    isPending:isPendingDeletion,
    isError:IsDeleteError,
    error:deleteError}=useMutation({
    mutationFn:deleteEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:['events'],
        refetchType:'none'
      })
      navigate('/events')
    }
  })
  function  handlesStartDelete(){
    setisDeleting(true)
  }
  function  handlesStopDelete(){
    setisDeleting(false)
  }

  function  handleDelete(){
    //const onCondition=window.confirm("Are you sure to delete this event?")
    //console.log(onCondition)
    mutate({id:param.id});
  }
  let content;
  if(isPending){
    content=(<div id='event-details-content' className='center'>
      <p>Fetching data...</p>
    </div>)
  }
  if(isError){
    content=(<div id='divevent-details-content' className='center'>
      <ErrorBlock title='fail to load event detail' message={error.info?.message||'canot fetch event detail'}/>
    </div>)
  }
  if(data){
    const formatedDate=new Date(data.date).toLocaleDateString('en-US',{
      day:'numeric',
      month:'short',
      year:'numeric'
    })
    content=(<>
      <header>
          <h1>{data.title}</h1>
          <nav>
            <button on onClick={handlesStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
    <div id="event-details-content">
      <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
      <div id="event-details-info">
        <div>
          <p id="event-details-location">{data.location}</p>
          <time dateTime={`Todo-DateT$Todo-Time`}>{formatedDate} @ {data.time}</time>
        </div>
        <p id="event-details-description">{data.discription}</p>
      </div>
    </div>
    </>)
  }

  return (
    <>
    {isDeleting&&(<Modal onClose={handlesStopDelete}>
      <h2>Are you sure !</h2>
      <p>Do you really want to delete this event? This action cannot be undone.</p>
      <div className='form-actions'>
        {isPendingDeletion?<p>deleting...</p>:
        (<>
        <button className='button-text' onClick={handlesStopDelete}>Cancel</button>
        <button className='button' onClick={handleDelete}>Delete</button>
        </>)}
      </div>
      {IsDeleteError&&<ErrorBlock title="an error accorred while deleting" message={deleteError.info?.message||'some thing went wrong while deleting'}/>}
    </Modal>)}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        
        {content}
      </article>
    </>
  );
}
