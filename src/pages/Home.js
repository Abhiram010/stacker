import React from 'react';
import Cards from '../components/Cards';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <>
        
            <Cards />
            <Outlet />
            
            </>
  )
}

export default Home