import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer class='site-footer'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-4'>
            <div class='mb-5'>
              <h3 class='footer-heading mb-4'>About Property Hub</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                pariatur reprehenderit vero atque, consequatur id ratione, et
                non dignissimos culpa? Ut veritatis, quos illum totam quis
                blanditiis, minima minus odio!
              </p>
            </div>
          </div>
          <div class='col-lg-4 mb-5 mb-lg-0'>
            <div class='row mb-5'>
              <div class='col-md-12'>
                <h3 class='footer-heading mb-4'>Navigations</h3>
              </div>
              <div class='col-md-6 col-lg-6'>
                <ul class='list-unstyled'>
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/'>Buy</NavLink>
                  </li>
                  <li>
                    <NavLink to='/'>Rent</NavLink>
                  </li>
                  <li>
                    <NavLink to='/'>Properties</NavLink>
                  </li>
                </ul>
              </div>
              <div class='col-md-6 col-lg-6'>
                <ul class='list-unstyled'>
                  <li>
                    <NavLink to='/'>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to='/'>Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to='/'>Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to='/'>Terms</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class='col-lg-4 mb-5 mb-lg-0'>
            <h3 class='footer-heading mb-4'>Follow Us</h3>

            <div>
              <NavLink to='/' class='pl-0 pr-3'>
                <span class='icon-facebook'></span>
              </NavLink>
              <NavLink to='/' class='pl-3 pr-3'>
                <span class='icon-twitter'></span>
              </NavLink>
              <NavLink to='/' class='pl-3 pr-3'>
                <span class='icon-instagram'></span>
              </NavLink>
              <NavLink to='/' class='pl-3 pr-3'>
                <span class='icon-linkedin'></span>
              </NavLink>
            </div>
          </div>
        </div>
        <div class='row pt-5 mt-5 text-center'>
          <div class='col-md-12'>
            <p>
              Copyright &copy;
              <script
                data-cfasync='false'
                src='/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js'
              ></script>
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved
              <i class='icon-heart text-danger' aria-hidden='true'></i> by{' '}
              <NavLink to='/' target='_blank'>
                Property Hub
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
