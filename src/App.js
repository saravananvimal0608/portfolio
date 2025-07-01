import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './portfoliFile/Navfile/Nav'
import Home from './portfoliFile/Home/Home'
import Project from './portfoliFile/Project/Project'
import About from '../src/portfoliFile/Components/AboutUs'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Nav/><Home/></>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
