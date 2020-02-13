import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TrendingProperty from './TrendingProperty';
import FilterProperty from './FilterProperty';
import Properties from './Properties';
import ChooseUs from './ChooseUs';
import Blog from './Blog';
import Agent from './Agent';

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
        <FilterProperty/>
        <Properties/>
        <ChooseUs/>
        <Blog/>
        <Agent/>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
