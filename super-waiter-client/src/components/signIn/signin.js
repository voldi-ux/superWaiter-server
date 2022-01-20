import React,{useState} from 'react';
import { axiosPost } from '../../axios/axios';
import './signin.css';



const SignInComponent = () => {
    const [loading, setLoading] = useState(false)
    const [credentials, setCredentials] = useState({})
    

    const handleSubmit = async () => {
        const res = await axiosPost('/dashboard/sign-in', credentials)
          console.log(res)       
}
 
    const handleChange = (event) => {
        setCredentials(prev => {
            prev[event.target.name] = +event.target.value;
            return prev;
        })
    }

    return (
      <div className="signin-container">
        <div className="sigin-container-inner">
          <img src={require("../../assets/images/logo-small.png")} alt="super waiter logo " />
          <input onChange={handleChange} name='pin' type={"number"} placeholder="pin" />
          <input onChange={handleChange} name='passcode' type={"number"} placeholder="passcode" />
          <button onClick={handleSubmit}>sign in</button>
          <p>Use the credentials that were given to you. Contact 0629114175 or email superwaiter@gmail.com if you are facing any challenges.</p>
        </div>
      </div>
    );
}


export default SignInComponent;