import React from 'react';
import { useState } from "react";
import BoopButton from './demo';
// import for_bg from './D:\ibridge task\react\spotify\src\Background_video.mp4'


const Log_in = () =>{
    const [name, setName] = useState("");
   
    const[password, setPassword]=useState("");
    
    const onChangeHandler = (fieldName, value)=>{
      if(fieldName === "name"){
        setName(value);
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
     
      else if( password.trim() ==""){
        alert("required password field");
      }
      else{
        alert( 'Hi'+'_'+name+'_Your are Successfully Logged'+',' +'Welcome to Spotify. Best Online Auto Streaming Service.');
        
      }
    }
               return(
                <div className="cls_1 container-sm mt-5 border border-5 h-80 w-50" >
                
                <div className='row'>
                <div className='col-sm-2 '></div>
                  <div className='col-sm-4'>
                  <i className="bi bi-spotify icon_set"></i>
                  <p >Spotify</p>
                  </div>
                  <div className='col-sm-4'>
                  <h1 className="text-center text-white">Login</h1><br/>
                    <form className="text-center"onSubmit={(e)=>{onSubmitHandler(e)}}>
                      <label className='text-white' > <i class="bi bi-person-fill radius_set"></i> User Name<br/>
                      <input type="text"  placeholder="Your name" id='pass_name'  className="ml-5 w-100"  value={name} onChange={(e)=>{ onChangeHandler("name",e.target.value)}} />
                      </label><br/><br/>
                      <label className='text-white'> <i class="bi bi-person-fill-lock radius_set"></i> Password<br/>
                          <input type="password"  placeholder="Your Password" className="ml-5" value={password} onChange={(e)=>{ onChangeHandler("password",e.target.value)}} />
                          </label><br/><br/>

            
                           <button > Log_in</button><br/> <br/>
                           <a href='#'>Or Continue With</a><br/>
                           <i class="bi bi-facebook text-white m-4 btn  radius_set"></i> <i class="bi bi-google text-white m-3 radius_set btn"></i>
                          </form>
                          </div>
                        <BoopButton/>
                          </div>
            
               </div>
               )
}

export default Log_in;