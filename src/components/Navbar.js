import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';

function Navbar() {
    return (
        <>
        <Link to="/">
            <div className="logo-C61RwL">
               <img src={Logo}/></div>
        </Link>
            <div class="group-1-C61RwL" data-id="11:113">
            <Link to="/">
                  <div class="home-VyzZeT valign-text-middle montserrat-medium-black-17px" data-id="11:114">Home</div>
                  </Link>
               <Link to="/services">
                  <div class="services-VyzZeT valign-text-middle montserrat-medium-black-17px" data-id="11:115">Services</div>
                  </Link>
               <Link to="/aboutus">
                  <div class="about-us-VyzZeT valign-text-middle montserrat-medium-black-17px" data-id="11:116">About us</div>
                  </Link>
               <Link to="/career">
                  <div class="your-career-VyzZeT valign-text-middle montserrat-medium-black-17px" data-id="11:117">Your career</div>
                  </Link>
               <Link to="/contact">
                  <div class="contacts-VyzZeT valign-text-middle montserrat-medium-black-17px" data-id="11:119">Contacts</div>
                  </Link>
            </div>
        </>
    )
}

export default Navbar;
