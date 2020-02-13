import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../assets/images/person_1.jpg';

const Agent = () => {
  return (
    <div class='site-section'>
      <div class='container'>
        <div class='row mb-5 justify-content-center'>
          <div class='col-md-7'>
            <div class='site-section-title text-center'>
              <h2>Our Agents</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                magnam officiis ipsa eum pariatur labore fugit amet eaque iure
                vitae, repellendus laborum in modi reiciendis quis! Optio minima
                quibusdam, laboriosam.
              </p>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-6 col-lg-4 mb-5 mb-lg-5'>
            <div class='team-member'>
              <img src={image} alt='person' class='img-fluid' />Ï
              <div class='text'>
                <h2 class='mb-2 font-weight-light text-black h4'>
                  Megan Smith
                </h2>
                <span class='d-block mb-3 text-white-opacity-05'>
                  Real Estate Agent
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  dolorem totam non quis facere blanditiis praesentium est.
                  Totam atque corporis nisi, veniam non. Tempore cupiditate,
                  vitae minus obcaecati provident beatae!
                </p>
                <p>
                  <NavLink to='#' class='text-black p-2'>
                    <span class='icon-facebook'></span>
                  </NavLink>
                  <NavLink to='#' class='text-black p-2'>
                    <span class='icon-twitter'></span>
                  </NavLink>
                  <NavLink to='#' class='text-black p-2'>
                    <span class='icon-linkedin'></span>
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
