import React from 'react'

const Header = ({onclick}) => {
    return (
        <div classNameName="navbar">
         <a classNameName="btn-link" href="#" onClick={onclick}>Home</a>
         <a classNameName="btn-link" href="#">About</a>
         <a classNameName="btn-link" href="#">Certification</a>
        </div>

    )
}

export default Header
