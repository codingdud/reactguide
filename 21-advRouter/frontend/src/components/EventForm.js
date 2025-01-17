import { Form, useActionData, useNavigate, useNavigation,json,redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const actionData=useActionData();
  const navigate = useNavigate();
  const navigation=useNavigation();

  const isSubmiting=navigation.state==='submitting'
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {actionData&&actionData.errors&&<ul>
        {Object.values(actionData.errors).map((err)=><li key={err}>
          {err}
          </li>)}
        </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" 
        type="text" 
        name="title" 
        required 
        defaultValue={event?.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" 
        type="url" 
        name="image" 
        required 
        defaultValue={event?.image}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" 
        type="date" 
        name="date" 
        required 
        defaultValue={event?.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" 
        name="description" 
        rows="5" required 
        defaultValue={event?.description}></textarea>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmiting}>
          Cancel
        </button>
        <button disabled={isSubmiting}>{isSubmiting?'submiting..':'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;


export async function action({request,params}){
  const method=request.method
  const data=await request.formData()
  const eventData={
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description'),
  }
  console.log(method)
  let url='http://localhost:8080/events'
  if(method==='PATCH'){
    const id=params.id
    url+=`/${id}`
  }
  const response=await fetch(url,{
    method:method,
    headers:{'Content-Type' : 'application/json'},
    body:JSON.stringify(eventData),
  })
  //console.log(response)
  if(response.status===422){
    //console.log("hii")
    return response
  }
  if(!response.ok){
    throw json({message:"can't save data"},{status:500})
  }
  return redirect("/events")
}