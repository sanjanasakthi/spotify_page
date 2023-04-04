import React from 'react';
import { useState } from "react";
// import for_image from './image_bg.jpg';

import './App.css'
const Sign_up = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword]=useState("");
    const onChangeHandler = (fieldName, value)=>{
      if(fieldName === "name"){
        setName(value);
      }
      else if(fieldName==="email"){
        setEmail(value);
      }
      else if(fieldName==="password"){
        setPassword(value);
      }
    }
    const onSubmitHandler = (e)=>{
      e.preventDefault();
      if(name.trim()===""){
        alert("required name field");
      }
      else if( email.trim() ===""){
        alert("required mail field");
      }
      else if( password.trim() ===""){
        alert("required password field");
      }
      else{
        alert('Thank you!_'+name +'_for signing up.Welcome to Spotify.Best Online Auto Streaming Service.');
        
        
      }
    }
               return(
                <div className="cls_1 container-sm mt-5 border border-5 h-80 w-50" >
                {/* <h1 className="text-center text-white">Sign up</h1> */}
                <div className='row'>
                <div className='col-sm-2 '></div>
                  <div className='col-sm-4 '>
                  <i className="bi bi-spotify icon_set"></i>
                  <p>Spotify</p>
                  </div>
                  <div className='col-sm-4'>
                  <h1 className="text-center text-white">Sign up</h1>
                    <form onSubmit={(e)=>{onSubmitHandler(e)}}>
                      <label className='text-white'> <i class="bi bi-person-fill"></i> Name<br/>
                      <input type="text"  placeholder="Your name" id='pass_name'  className="ml-5"  value={name} onChange={(e)=>{ onChangeHandler("name",e.target.value)}} />
                      </label><br/><br/>
                      {/* <p id='get_name'></p> */}
                          
                          <label className='text-white'> <i class="bi bi-envelope-fill"></i> E-mail<br/>
                          <input type="email"  placeholder="Your name" className="ml-5" value={email} onChange={(e)=>{ onChangeHandler("email",e.target.value)}}/>
                          </label><br/><br/>
            
                          <label className='text-white'> <i class="bi bi-person-fill-lock"></i> Password<br/>
                          <input type="password"  placeholder="Your name" className="ml-5" value={password} onChange={(e)=>{ onChangeHandler("password",e.target.value)}} />
                          </label><br/><br/>
                          <input type="radio" className='text-white'  /> <strong className='text-white'>I agree all statements in</strong> <a href="./Demoone">Terms of services</a><br/>
            
                           <button > Sign-up</button>
                          </form>
                          </div>
                        
                          </div>
            
               </div>
               )
}

export default Sign_up;