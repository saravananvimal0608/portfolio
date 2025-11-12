import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './portfolioFile/Components/Nav'
import Home from './portfolioFile/Components/Home'
import Project from './portfolioFile/Components/Project'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Nav /><Home /></>} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
