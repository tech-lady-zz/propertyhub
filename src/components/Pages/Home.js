import React from 'react';
import NavHeader from './NavHeader';
import Carousel from './Slide';
import Listings from './Listings';
import Services from './Services';
import Footer from './Footer';
import Properties from './Properties'

const Home = () => {
  return (
    <div>
      <div className="site-loader"></div>
  
      <div className="site-wrap">

        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <NavHeader />
        <Carousel />
        <Listings />
        <Properties />
        <Services />
        <Footer />      
      </div>
    </div>
  );
};

export default Home;
