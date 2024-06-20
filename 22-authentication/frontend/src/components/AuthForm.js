
import { Form,Link,useActionData,useNavigation,useSearchParams} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const [searchParam,setSearchParam]=useSearchParams()
  const navigation=useNavigation()
  const isSubmiting=navigation.state==='submitting'
  const data=useActionData();
  const isLogin=searchParam.get('mode')==='login'
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Login' : 'Create a new user'}</h1>
        {data && data.errors && <ul>{Object.values(data.errors).map(err=><li key={err}>{err}</li>)}</ul> }
        {data && data.messages && <li>{data.messages}</li>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin? 'signup':'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmiting}>{isSubmiting?'saving....':'save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
