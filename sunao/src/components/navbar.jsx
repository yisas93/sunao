import React from "react";
import { useState } from "react";




export const Navbar=()=>{
    // page small devices
    const [isPageVisible, setIsPageVisible]= useState(false)
    const handlePageVisible=()=>{
      if (isPageVisible==true){
        setIsPageVisible(false)
      }else{
        setIsPageVisible(true)
      }
    }
      // dropdown zapatos
    const [areShoesVisible, setAreShoesVisible] = useState(false);
    const handleHover = () => {
      setAreShoesVisible(true);
    };
    const handleLeave = () => {
      setAreShoesVisible(false);
    }
    // dropdown joyería
    const [isJewerlyVisible, setIsJewerlyVisible]=useState(false)
    const handleHoverJewerly=()=>{
      setIsJewerlyVisible(true)
    }
    const handleJewerlyLeave=()=>{
      setIsJewerlyVisible(false)
    }
    // dropdown lenceria
    const [isLingerieVisible, setIsLingerieVisible]=useState(false)
    const handleHoverLingerie=()=>{
      setIsLingerieVisible(true)
    }
    const handleLingerieLeave=()=>{
      setIsLingerieVisible(false)
    }
    return(
        <div className="con">
            <nav className="navbar navbar-expand-lg bg-black d-none d-lg-block  " style={{borderBottom: "1px solid black"}}>
  <div className="container-fluid " style={{borderBottom: "1px solid white"}}>
    
   
    <div className="collapse navbar-collapse" id="navbarNavDropdown" >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-nav" aria-current="page" href="#">Contactanos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-nav" href="#">Conviertete en vendedora</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-nav" href="#">Pricing</a>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>

{/* segundo nav*/ }
<nav className="navbar navbar-expand-lg bg-black ">
  <div className="container-fluid">
    <a className="navbar-brand text-nav" href="#">Sunao_virtual</a>
    <button className="navbar-toggler " onClick={handlePageVisible} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown ">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link  text-nav" onMouseEnter={handleHoverLingerie} onMouseLeave={handleLingerieLeave} aria-current="page" href="#">Lencería</a>
          {isLingerieVisible && (
              <ul className="ul-nav-drop">
            <li className="dropdown-item">fg</li>
            <li className="dropdown-item">fgd</li>
            <li className="dropdown-item">gfdgfd</li>
          </ul>
          )}
        </li>
        <li className="nav-item">
          <a className="nav-link text-nav" onMouseEnter={handleHoverJewerly} onMouseLeave={handleJewerlyLeave}  href="#">Joyería</a>
          {isJewerlyVisible && (
              <ul className="ul-nav-drop">
            <li className="dropdown-item">fg</li>
            <li className="dropdown-item">fgd</li>
            <li className="dropdown-item">gfdgfd</li>
          </ul>
          )}
        </li>
        <li className="nav-item">
          <a className="nav-link text-nav" onMouseEnter={handleHover}
        onMouseLeave={handleLeave} href="#">Zapatos</a>
          {areShoesVisible && (
              <ul className="ul-nav-drop">
            <li className="dropdown-item">fg</li>
            <li className="dropdown-item">fgd</li>
            <li className="dropdown-item">gfdgfd</li>
          </ul>
          )}
        
        </li>
       
      </ul>
      <a className="nav-link text-nav shopping-logo" href=""><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
  </div>
</nav>
{isPageVisible && (
  <div className="page d-grid" style={{border: "1px solid yellow"}}>
  <div className=" closepage " style={{border: "1px solid red"}}>
    <div className="x  ">
<i class="fa-solid fa-xmark" onClick={handlePageVisible}></i>
    </div>
   <div className="img-page-cont" style={{border: "1px solid blue"}}>
          <img className="img-page" src="https://imgs.search.brave.com/yilrMLbmKTTVQOCGFCzsGwQlOjerq7eDP_HBAmhG_Wc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU1/NjQxNDg4L3Bob3Rv/L2Nsb3RoZXMtc2hv/cC1jb3N0dW1lLWRy/ZXNzLWZhc2hpb24t/c3RvcmUtc3R5bGUt/Y29uY2VwdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Wm91/RUNoNS1YT0N1Qnp2/S0JRZnhneXcwUklH/RVVnOXU1RjBzSmla/Vjg2cz0" alt="" />
  </div>
<div className="buttonspage d-grid">
      <span className="mb-1 mt-2 ms-2">Lencería</span>
      <span className="mb-1 ms-2">Joyería</span>
      <span className="mb-1 ms-2">Zapatos</span>
      <span className="mb-1 ms-2">Hombres</span>
    </div>

  </div>
</div>
)}

        </div>
    )
}