import { useState } from 'react';
import Link from 'next/link';
import { firebaseClient } from '../FirebaseIntialization';


 const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (

<div className="LoginPage" >
    
    <div className="login-box">
        
    <h2>Login</h2>
    <form>
    <div className="user-box">
    
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
      /> 
       <label>Email</label>
    </div>
    <div className="user-box">
 
  <input
        type={'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
       
      />
       <label>Password</label>
    </div>
    <a href="#" onClick={async () => {
          await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
          window.location.href = '/';
        }}
      >
     <span></span> 
     <span></span>
     <span></span>
     <span></span>
      Submit
    </a>
      </form>

      </div>

    </div>

    
  );
};

export default Login


 /* <button
        onClick={async () => {
          await firebaseClient
            .auth()
            .createUserWithEmailAndPassword(email, pass);
          window.location.href = '/';
        }}
      >
        Create account
      </button> */