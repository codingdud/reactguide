import Input from "./Input";
import{isEmail,isNotEmpty,hasMinLength} from "../util/validation"
import useInput from "../hooks/useInput";

export default function Statelogin() {
/*   const [email,SetEmail]=useState('')
  const [pass,setPass]=useState('') */
  const{value:emailValue,
    handleEnterValue:handleEmailChange,
    handleInputBlure:handleEmailBlure,
    hasError:EmailError
  }=useInput('',(value)=>isEmail(value)&&isNotEmpty(value))

  const{value:passValue,
    handleEnterValue:handlePassChange,
    handleInputBlure:handlePassBlure,
    hasError:PassError
  }=useInput('',(value)=>hasMinLength(value,6)) 

  function handleSubmit(event){
    event.preventDefault()
    if(EmailError||PassError){
      return
    }
    console.log("entered value :",enterValue)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
      <div className="control-row">
      <Input
      label="Email"
      id="email"
      type="email"
      name="email"
      onBlur={handleEmailBlure}
      onChange={handleEmailChange}
      value={emailValue}
      error={EmailError&&"email invalid"}
      />
      <Input
      label="Password"
      id="password"
      type="password"
      name="password"
      onBlur={handlePassBlure}
      onChange={handlePassChange}
      value={passValue}
      error={PassError&&"pass is too short"}
      />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
