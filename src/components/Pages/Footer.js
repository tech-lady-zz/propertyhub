import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About Homeland</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
              </div> 
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><NavLink to="#">Home</NavLink></li>
                    <li><NavLink to="#">Buy</NavLink></li>
                    <li><NavLink to="#">Rent</NavLink></li>
                    <li><NavLink to="#">Properties</NavLink></li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><NavLink to="#">About Us</NavLink></li>
                    <li><NavLink to="#">Privacy Policy</NavLink></li>
                    <li><NavLink to="#">Contact Us</NavLink></li>
                    <li><NavLink to="#">Terms</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <h3 className="footer-heading mb-4">Follow Us</h3>
                <div>
                  <NavLink to="#" className="pl-0 pr-3"><span className="icon-facebook"></span></NavLink>
                  <NavLink to="#" className="pl-3 pr-3"><span className="icon-twitter"></span></NavLink>
                  <NavLink to="#" className="pl-3 pr-3"><span className="icon-instagram"></span></NavLink>
                  <NavLink to="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></NavLink>
                </div>
            </div>
            
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This react template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <NavLink to="https://colorlib.com" target="_blank" >Olayemi</NavLink>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;