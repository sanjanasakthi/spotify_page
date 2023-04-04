import React from 'react';
import { Link } from 'react-router-dom';

//  import Login from './login';
const Aboutpage = () => {
	
	return (
		<div>
            <p className='container m-5'><i className="bi bi-spotify"></i>Spotify</p>
                  <Link to='./home'className=' set_dec m-3'>Home</Link>
				  <Link to='./log' className='m-5 set_dec'>Login in</Link>
                  <Link to='/sign_up' className='set_dec m-5'>Sign up</Link>
                 
				  </div>
				  );
					  };

export default Aboutpage;