import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../assets/images/img_4.jpg';


const Blog = () => {
  return (
    <div className='site-section bg-light'>
      <div className='container'>
        <div className='row justify-content-center mb-5'>
          <div className='col-md-7 text-center'>
            <div className='site-section-title'>
              <h2>Recent Blog</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              maiores quisquam saepe architecto error corporis aliquam. Cum
              ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque,
              deleniti cupiditate officia.
            </p>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-6 col-lg-4 mb-5'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <NavLink to='#'>
            <img src={image} alt='blog' className='img-fluid' />
            </NavLink>
            <div className='p-4 bg-white'>
              <span className='d-block text-secondary small text-uppercase'>
                Jan 20th, 2019
              </span>
              <h2 className='h5 text-black mb-3'>
                <NavLink to='#'>Art Gossip by Mike Charles</NavLink>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                enim, ipsa exercitationem veniam quae sunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
