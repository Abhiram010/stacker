import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import History from './pages/History';
import EditCard from './pages/EditCard';

function App() {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/History" element={<History />} />
            <Route path="/EditCard:id" element={<EditCard />} />
            </Route>
         
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
