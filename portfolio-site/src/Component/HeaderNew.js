import React from 'react'
import {Link} from 'react-router-dom'
import resume from './ShivamGuptaResume.pdf'
const HeaderNew = () => {
    return (
        <header className="l-header" id="header">
        <nav className="nav bd-container">
          <Link to="/" className="nav__logo">Hi! Recruiters</Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">Home</Link>
              </li>
              {/* <li className="nav__item">
                <Link to="#work" className="nav__link">Work</Link>
              </li> */}
              <li className="nav__item">
                <Link to="/Project" className="nav__link">Project</Link>
              </li>
              <li className="nav__item">
                <Link to="/CreateNote" className="nav__link">Contact</Link>
              </li>
              {<li className="nav__item">
                <a href={resume} className="nav__link pulsingButton" download><i class="fa fa-download"></i>Resume</a>
              </li> }
            </ul>
  
            
  
          </div>
  
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>


        
    )
}

export default HeaderNew
