import { json, redirect } from "react-router-dom"
import EventForm from "../components/EventForm" 
export default function NewEvent() {
  return (<EventForm method='post'/>)
}

export async function action({request,params}){
  const data=await request.formData()
  const eventData={
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description'),
  }

  const response=await fetch('http://localhost:8080/events',{
    method:'POST',
    headers:{'Content-Type' : 'application/json'},
    body:JSON.stringify(eventData),
  })
  //console.log(response)
  if(response.status===422){
    //console.log("hii")
    return response
  }
  if(!response.ok){
    throw json({message:"Erro ao enviar formulário"},{status:500})
  }
  return redirect("/events")
}