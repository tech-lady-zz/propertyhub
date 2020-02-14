import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../assets/images/person_1.jpg';

const Agent = () => {
  return (
    <div className='site-section'>
      <div className='container'>
        <div className='row mb-5 justify-content-center'>
          <div className='col-md-7'>
            <div className='site-section-title text-center'>
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
        <div className='row'>
          <div className='col-md-6 col-lg-4 mb-5 mb-lg-5'>
            <div className='team-member'>
              <img src={image} alt='person' className='img-fluid' />Ï
              <div className='text'>
                <h2 className='mb-2 font-weight-light text-black h4'>
                  Megan Smith
                </h2>
                <span className='d-block mb-3 text-white-opacity-05'>
                  Real Estate Agent
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  dolorem totam non quis facere blanditiis praesentium est.
                  Totam atque corporis nisi, veniam non. Tempore cupiditate,
                  vitae minus obcaecati provident beatae!
                </p>
                <p>
                  <NavLink to='#' className='text-black p-2'>
                    <span className='icon-facebook'></span>
                  </NavLink>
                  <NavLink to='#' className='text-black p-2'>
                    <span className='icon-twitter'></span>
                  </NavLink>
                  <NavLink to='#' className='text-black p-2'>
                    <span className='icon-linkedin'></span>
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
