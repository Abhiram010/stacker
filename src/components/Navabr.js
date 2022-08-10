import React from 'react'
import { Link } from 'react-router-dom';
import cardData from '../data'
import ListItem from './ListItem';

const Navabr = () => {
    let navbarLinks = [];
    let unique = [];
    for (let i = 0; i < cardData.length; i++) { 
        navbarLinks.push(cardData[i].category);
    }
   
        for (let j = 0; j < navbarLinks.length; j++) { 
            if (!unique.includes(navbarLinks[j])) {
                unique.push(navbarLinks[j]);
            }
        }
   
    let filterName = (navlink) => {
        console.log(navlink)
    }
    let counter = 0;

  return (
      <div>
          <nav className={"navbar navbar-expand-lg bg-dark"}>
              <div className={"container-fluid"}>
                  <Link to="/" className="navbar-brand text-white">Stacker</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          {unique.map((navLink) => {
                            counter = counter + 1;
                              return (
                                  <ListItem linkSource={() => (filterName)} linkName={navLink} key={counter} />
                                  
                              );
                          })}
                      </ul>
                      
                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navabr