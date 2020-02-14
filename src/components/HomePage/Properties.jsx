import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import  {getAllProperties} from '../../redux/actions/PropertyAction';

const Properties = ({ getAllProperties, properties }) => {
  useEffect(() => {
    getAllProperties();
  }, []);

  return (
    <div className='site-section site-section-sm bg-light'>
      <div className='container'>
        <div className='row mb-5'>
          {properties.map(property => (
            <div className='col-md-6 col-lg-4 mb-4'>
              <div className='property-entry h-100'>
                <NavLink to='/property-details' className='property-thumbnail'>
                  <div className='offer-type-wrap'>
                    {/* <span className="offer-type bg-danger">Sale</span> */}
                    <span className='offer-type bg-success'>
                      {property.option}
                    </span>
                  </div>
                  <img
                    src={property.image}
                    alt='property'
                    className='img-fluid'
                  />
                </NavLink>
                <div className='p-4 property-body'>
                  <NavLink to='#' className='property-favorite'>
                    <span className='icon-heart-o'></span>
                  </NavLink>
                  <h2 className='property-title'>
                    <NavLink to='/property-details'>{property.name}</NavLink>
                  </h2>
                  <span className='property-location d-block mb-3'>
                    <span className='property-icon icon-room'></span>{' '}
                    {property.address}
                  </span>
                  <strong className='property-price text-primary mb-3 d-block text-success'>
                    {property.amount}
                  </strong>
                  <ul className='property-specs-wrap mb-3 mb-lg-0'>
                    <li>
                      <span className='property-specs'>Beds</span>
                      <span className='property-specs-number'>
                        {property.bed} <sup>+</sup>
                      </span>
                    </li>
                    <li>
                      <span className='property-specs'>Baths</span>
                      <span className='property-specs-number'>
                        {property.bath}
                      </span>
                    </li>
                    <li>
                      <span className='property-specs'>SQ FT</span>
                      <span className='property-specs-number'>
                        {property.sqMeter}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <div className='site-pagination'>
            <NavLink to='#' className='active'>
              1
            </NavLink>
            <NavLink to='#'>2</NavLink>
            <NavLink to='#'>3</NavLink>
            <NavLink to='#'>4</NavLink>
            <NavLink to='#'>5</NavLink>
            <span>...</span>
            <NavLink to='#'>10</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStatesToProps = state => ({
  properties: state.Properties
});
export default connect(mapStatesToProps, { getAllProperties })(Properties);
