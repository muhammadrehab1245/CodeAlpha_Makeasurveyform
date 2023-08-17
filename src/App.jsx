import './App.css'
import { Formfour } from './components/Formfour';
import { Formone } from './components/Formone'
import { Formthree } from './components/Formthree';
import { Formtwo } from './components/Formtwo';
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Formlast} from './components/Formlast';
import Notestate from './context/Notestate';
import { useState } from 'react';
import { Formstatus } from './components/Formstatus';
function App() {
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
  };
  setTimeout(() => {
    setalert(null);
  }, 2500);
  return (
    <Notestate>
        <BrowserRouter>
    <Header/>
    <Formstatus alert={alert} />
<Routes>
        <Route  path="/" exact='true' element={<Formone/>}/>
        <Route path="/two" element={<Formtwo/>}/>
        <Route path="/three" element={<Formthree/>}/>
        <Route path="/four" element={<Formfour/>}/>
        <Route path="/five" element={<Formlast showalert={showalert}/>}/>
      
      </Routes>
</BrowserRouter>
</Notestate>
  )
}

export default App
