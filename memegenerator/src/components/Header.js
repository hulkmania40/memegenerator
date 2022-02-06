import React from 'react';
import logo from '../images/troll-face.png'
export default function Header() {
  return (
  <div>
    <nav className="navbar navbar-light bg-light navcss">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="" className='nav--logo'/>
                <span className='nav--text'>Meme Generator</span>
            </a>
            <h4>React Course - Project 3</h4>
        </div>
    </nav>
  </div>
  );
}
