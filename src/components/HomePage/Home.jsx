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
      {/* <div className='site-loader'></div> */}

      <div className='site-wrap'>
        <div className='site-mobile-menu'>
          <div className='site-mobile-menu-header'>
            <div className='site-mobile-menu-close mt-3'>
              <span className='icon-close2 js-menu-toggle'></span>
            </div>
          </div>
          <div className='site-mobile-menu-body'></div>
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
