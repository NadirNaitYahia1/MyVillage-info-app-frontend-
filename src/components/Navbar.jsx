import React from 'react'
import '../bootstrap-5.1.3-dist/css/bootstrap.min.css'
import  './navbar.css'
import imgLogo from '../images/Fotor_AI.png'; 
import { useState } from 'react'
 

const Navbar = (props) => {
  const [scroll, setScroll] = useState(false);
  
  const changeNav = () => {
    if (window.scrollY >= 540) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
 
  window.addEventListener('scroll', changeNav);
  
 

    const handleChange = () => {
      console.log(props);
      props.onChange();
    }
    const change = () => {
      window.location.href = '/login';
    }
  

  
  return (

    <nav class={scroll ? 'navbar' : 'navbar active '}>
    <div class="container navbar-expand-lg  justify-content-center  ">
    
       <img src={imgLogo} width="200" height="200" class="d-inline-block align-text-top" onClick={change}/>
       <a class="navbar-brand    justify-content-center " href="#" ><p className='logo'>Beni Ourtilane</p></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>


      <div class="collapse navbar-collapse  " id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ">
            <a class="nav-link    mx-3 " aria-current="page" href="#">Accueil</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link    mx-3" href="#">Services</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link  mx-3" href="#">A propos</a>
          </li>

  
          {/* <input type="checkbox" class="l"    onClick={handleChange}></input> */}
 

        </ul>




      </div>
    </div>
  </nav>


  )
}

export default Navbar; 