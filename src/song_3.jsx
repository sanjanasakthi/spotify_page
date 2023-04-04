import React from 'react';
import for_logo from './image/Ewa.jpg'
import './App.css';
 import useSound from 'use-sound';
import onSound from './audio/Shinunoga_EWa.mp3';
import { Link } from 'react-router-dom';
const Home_3 = () => {

  const [play, { stop }] = useSound(onSound);

    return(
              <div className='container mt-5 border border-5 w-100 h-100 set_color'>

                    <div className='row'>
                      
                        <div className='col-sm-5'>
                       <i class="bi bi-chevron-down text-white btn"></i>
                       </div>
                       <div className='col-sm-6'>
                       <i  className='set_design text-white'>Playing From Album</i><br/>
                       
                       <b className='text-white'>Shinunoga E-Wa</b>
                       </div>
                       <div className='col-sm-1'>
                       <i class="bi bi-three-dots-vertical text-white btn"></i>
                       </div>
                       </div>
                       
                <div className='container'>
                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-6'>
                    <img className=" img-fluid border border-5  " src={for_logo} alt="this is logo" id='img_set' />
                     </div>
                     <div className='col-sm-5'>

                     </div>
                </div>
                </div>

                <div className='container'>
                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-5'>
                        <p className='text-white'>Shinunoga E-Wa</p>
                        <p className='text-muted'>Fujii Kaze </p>
                     </div>
                     <div className='col-sm-4'>
                        <i className="bi bi-heart-fill btn " id='set_icon'></i>
                     </div>
                </div>
                </div>

                 <input type="range" className="range container"  id="customRange3"></input>
                          

                 <div className='container'>
                <div className='row'>

                  <div className='col-sm-5'>

                  </div>
                  <div className='col-sm-3 hov_set'>
                <i className="bi bi-shuffle text-white btn set_size "></i>
                <Link to='/home_2' onClick={()=> stop()}  className="bi bi-caret-left-fill text-white btn set_size"></Link>
                <button className="bi bi-pause-circle   btn set_size_2 " id='btn_h' 
                
                onClick={()=>play()}
                onDoubleClick={()=> stop()} 
                

                
                ></button>
                <Link to='/home_4' onClick={()=> stop()} className="bi bi-caret-right-fill text-white btn set_size " ></Link>
                <i className="bi bi-repeat text-white btn set_size"  ></i>
                </div>
                <div className='col-sm-4'>
           
                </div>
                 </div>
             
                </div> 

         
              </div>



    )
} 

export default Home_3 ;