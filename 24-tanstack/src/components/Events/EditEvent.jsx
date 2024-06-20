import { useQuery,useMutation} from '@tanstack/react-query';
import { Link, redirect, useNavigate,useNavigation,useParams, useSubmit } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { fetchEvent,updateEvent,queryClient} from '../../util/http.js';

export default function EditEvent() {
  const submit=useSubmit()
  const params=useParams()
  const navigate = useNavigate();
  const {state}=useNavigation()

  const{data,isPending,isError,error}=useQuery({
    queryKey: ['events',params.id],
    queryFn:({signal})=>fetchEvent({signal,id:params.id}),
    staleTime:10000,
  })

  // const{mutate}=useMutation({
  //   mutationFn:updateEvent,
  //   onMutate:async(data)=>{
  //     const newEvent=data.event
  //     await queryClient.cancelQueries({queryKey:['events',params.id]})
  //     const prevData=queryClient.getQueryData(['events',params.id])
  //     queryClient.setQueryData(['events',params.id],newEvent);
  //     return {prevData}
  //   },
  //   onError:(data,error,context)=>{
  //     queryClient.setQueriesData(['events',params.id],context.prevData)
  //   },
  //   onSettled:()=>{
  //     queryClient.invalidateQueries([`userEvents`,params.id]);
  //   }
  // })

  function handleSubmit(formData) {
    // mutate({id:params.id,event:formData})
    // navigate(`../`)
    submit(formData,{method:'PuT'})
  }

  function handleClose() {
    navigate('../');
  }
  let content;
  if(isPending){
    content=<div className='center'><LoadingIndicator/></div>
  }
  if(isError){
    content=(<>
      <ErrorBlock title="an Error occurred" message={error.info?.message||'failed to fetch data for editing'}/>
      <div className='form-action'>
        <Link to='../' className='button'>
          go back
        </Link>
      </div>
    </>)
  }
  if(data){
    content=(<EventForm inputData={data} onSubmit={handleSubmit}>
      {state==='submitting'?<p>submitting...</p>:(<><Link to="../" className="button-text">
        Cancel
      </Link>
      <button type="submit" className="button">
        Update
      </button></>)}
    </EventForm>)
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}


export function loader({params}){
  return queryClient.fetchQuery({
    queryKey: ['events',params.id],
    queryFn:({signal})=>fetchEvent({signal,id:params.id}),
  });
}

export async function action({request,params}){
  const formData=await request.formData()
  const UpdateEventData=Object.fromEntries(formData)
  await updateEvent({id:params.id,event:UpdateEventData})
  await queryClient.invalidateQueries(['events'])
  return redirect('../')
}