import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './portfolioFile/Components/Nav'
import Home from './portfolioFile/Components/Home'
import Project from './portfolioFile/Components/Project'
import Footer from './portfolioFile/Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
