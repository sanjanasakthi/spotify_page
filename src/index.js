import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Aboutpage from './About_page';
import Sign_up from './Sign_up';
import Log_in from './Login_page';
import Home_play from './Home_set';
import Home_2 from './Song_2';
import Home_3 from './song_3';
import Home_4 from './Song_4';
import Home_5 from './Song_5';

import './App.css';

ReactDOM.render(
<>
  <BrowserRouter>
    <Aboutpage/>
      <Routes>
        <Route path='/' element={<App/>}/>
				<Route path="/about" element={<Aboutpage/> }/>
        <Route path='/sign_up' element={<Sign_up/>}/>
        <Route path='/log' element={<Log_in/>}/>
        <Route path='/home' element={<Home_play/>}/>
        <Route path='/home_2' element={<Home_2/>}/>
        <Route path='/home_3' element={<Home_3/>}/>
        <Route path='/home_4' element={<Home_4/>}/>
        <Route path='/home_5' element={<Home_5/>}/>



	    </Routes>
  </BrowserRouter>
</>,
    document.getElementById('root')
);


