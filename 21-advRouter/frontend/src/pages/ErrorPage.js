import { useRouteError } from 'react-router-dom'
import PageContent from '../components/PageContent'
export default function ErrorPage() {
    const error=useRouteError()
    //console.log(error)
    let title="An error occerred!"
    let message="somthing went worng"
    if (error.status===500){
        message=error.data.message
    }if (error.status===404){
        title="not found!"
        message="could'nt found page or resource"
    }


  return (
    <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
  )
}
