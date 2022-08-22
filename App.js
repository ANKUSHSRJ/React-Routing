import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<div>HomePage</div>}/>
    <Route path='/signin' element={<div>singin</div>}/>
    <Route path='/signup' element={<About/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
