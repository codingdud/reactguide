import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  let lable_class="block mb-2 text-xs font-bold tracking-wide uppercase "
  if(emailNotValid){
    lable_class+=" text-red-600"
  }
  let password_class="block mb-2 text-xs font-bold tracking-wide uppercase "
  if(passwordNotValid){
    password_class+=" text-red-600"
  }



  return (
    <div className="w-full max-w-sm p-8 mx-auto rounded-md shadow-md bg-gradient-to-b from-blue-700 to-gray-400 text-white">
      <div>
        <p>
          <label className={lable_class}>Email</label>
          <input
            type="email"
            className="w-full py-2 px-4 leading-6 bg-gray-300 text-gray-700 border border-transparent rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={password_class}>Password</label>
          <input
            type="password"
            className="w-full py-2 px-4 leading-6 bg-gray-300 text-gray-700 border border-transparent rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="cursor-pointer bg-transparent text-inherit line-height-inherit focus:outline-none  text-green-400 border-none hover:text-green-500">
          Create a new account
        </button>
        <button className='cursor-pointer bg-transparent text-inherit line-height-inherit focus:outline-none px-4 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out bg-green-400 rounded-md  focus:shadow-outline hover:bg-green-500 hover:text-white' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
