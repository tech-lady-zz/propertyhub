import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTrendingProperties } from '../../redux/actions/TrendingPropertyAction';

const TrendingProperty = ({ getTrendingProperties, TrendingProperties }) => {
  useEffect(() => {
    getTrendingProperties();
  }, []);

  return (
    <div className='slide-one-item home-slider owl-carousel'>
      {TrendingProperties.map((TrendingProperty, key) => (
        <div
          className='site-blocks-cover overlay'
          style={{ backgroundImage: `url(${TrendingProperty.image})` }}
          data-aos='fade'
          data-stellar-background-ratio='0.5'
          key={key}
        >
          <div className='container'>
            <div className='row align-items-center justify-content-center text-center'>
              <div className='col-md-10'>
                <span className='d-inline-block bg-success text-white px-3 mb-3 property-offer-type rounded'>
                  {TrendingProperty.option}
                </span>
                <h1 className='mb-2'>{TrendingProperty.name}</h1>
                <p className='mb-5'>
                  <strong className='h2 text-success font-weight-bold'>
                    {TrendingProperty.amount}
                  </strong>
                </p>
                <p>
                  <NavLink
                    to='#'
                    className='btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2'
                  >
                    See Details
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStatesToProps = state => ({
  TrendingProperties: state.TrendingProperties
});
export default connect(mapStatesToProps, { getTrendingProperties })(
  TrendingProperty
);
