import React from 'react';
import { NavLink } from 'react-router-dom';
const ChooseUs = () => {
  return (
    <div className='site-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-7 text-center'>
            <div className='site-section-title'>
              <h2>Why Choose Us?</h2>
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
          <div className='col-md-6 col-lg-4'>
            <NavLink to='#' className='service text-center'>
              <span className='icon flaticon-house'></span>
              <h2 className='service-heading'>Research Subburbs</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt iure qui natus perspiciatis ex odio molestia.
              </p>
              <p>
                <span className='read-more'>Read More</span>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
