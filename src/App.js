import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Quiz from './Components/Quiz/Html-Quiz';
import CssQuiz from './Components/Quiz/Css-Quiz';



function App() {

 
  return (
    <div >
     <BrowserRouter>
     <header>
        <div>
          <Link to='/' className='btn btn-primary me-2'>Html Quiz</Link>
          <Link to='/css' className='btn btn-primary'>Css Quiz</Link>
          
        </div>
      </header>
      <section>
        <Routes>
          <Route path='/' element={<Quiz/>}/>
          <Route path='css' element={<CssQuiz/>} />
        </Routes>
      </section>
     </BrowserRouter>
    </div>
  );
}

export default App;
