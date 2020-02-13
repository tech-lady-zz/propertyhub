import React from 'react';
import { NavLink } from 'react-router-dom';
const ChooseUs = () => {
  return (
    <div class='site-section'>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-md-7 text-center'>
            <div class='site-section-title'>
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

        <div class='row'>
          <div class='col-md-6 col-lg-4'>
            <NavLink to='#' class='service text-center'>
              <span class='icon flaticon-house'></span>
              <h2 class='service-heading'>Research Subburbs</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt iure qui natus perspiciatis ex odio molestia.
              </p>
              <p>
                <span class='read-more'>Read More</span>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
