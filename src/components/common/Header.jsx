import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
  <div className="site-navbar mt-4">
    <div className="container py-1">
      <div className="row align-items-center">
        <div className="col-8 col-md-8 col-lg-4">
          <h1 className="mb-0"><NavLink to="/" className="text-white h2 mb-0"><strong>Property Hub<span className="text-danger">.</span></strong></NavLink></h1>
        </div>
        <div className="col-4 col-md-4 col-lg-8">
          <nav className="site-navigation text-right text-md-right" role="navigation">

            <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><NavLink to="/" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></NavLink></div>

            <ul className="site-menu js-clone-nav d-none d-lg-block">
              <li className="active">
                <NavLink to="/">Home</NavLink>
              </li>
              <li><NavLink to="/buy">Buy</NavLink></li>
              <li><NavLink to="/rent">Rent</NavLink></li>
              <li className="has-children">
                <NavLink to="/properties">Properties</NavLink>
                <ul className="dropdown arrow-top">
                  <li><NavLink to="/">Condo</NavLink></li>
                  <li><NavLink to="/">Property Land</NavLink></li>
                  <li><NavLink to="/">Commercial Building</NavLink></li>
                  <li className="has-children">
                    <NavLink to="/">Sub Menu</NavLink>
                    <ul className="dropdown">
                      <li><NavLink to="/">Menu One</NavLink></li>
                      <li><NavLink to="/">Menu Two</NavLink></li>
                      <li><NavLink to="/">Menu Three</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
       

      </div>
    </div>
  </div>
  );
};

export default Header;
