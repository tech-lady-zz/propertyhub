import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TrendingProperty from './TrendingProperty';
const Homepage = () => {
  return (
    <>
      {/* <div class='site-loader'></div> */}

      <div class='site-wrap'>
        <div class='site-mobile-menu'>
          <div class='site-mobile-menu-header'>
            <div class='site-mobile-menu-close mt-3'>
              <span class='icon-close2 js-menu-toggle'></span>
            </div>
          </div>
          <div class='site-mobile-menu-body'></div>
        </div>
        <Header />
        <TrendingProperty/>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
