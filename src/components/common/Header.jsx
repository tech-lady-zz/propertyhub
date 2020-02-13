import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
  <div class="site-navbar mt-4">
    <div class="container py-1">
      <div class="row align-items-center">
        <div class="col-8 col-md-8 col-lg-4">
          <h1 class="mb-0"><NavLink to="/" class="text-white h2 mb-0"><strong>Property Hub<span class="text-danger">.</span></strong></NavLink></h1>
        </div>
        <div class="col-4 col-md-4 col-lg-8">
          <nav class="site-navigation text-right text-md-right" role="navigation">

            <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><NavLink to="/" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></NavLink></div>

            <ul class="site-menu js-clone-nav d-none d-lg-block">
              <li class="active">
                <NavLink to="/">Home</NavLink>
              </li>
              <li><NavLink to="/buy">Buy</NavLink></li>
              <li><NavLink to="/rent">Rent</NavLink></li>
              <li class="has-children">
                <NavLink to="/properties">Properties</NavLink>
                <ul class="dropdown arrow-top">
                  <li><NavLink to="/">Condo</NavLink></li>
                  <li><NavLink to="/">Property Land</NavLink></li>
                  <li><NavLink to="/">Commercial Building</NavLink></li>
                  <li class="has-children">
                    <NavLink to="/">Sub Menu</NavLink>
                    <ul class="dropdown">
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
