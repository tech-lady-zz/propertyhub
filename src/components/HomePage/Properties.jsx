import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../assets/images/img_1.jpg';

const Properties = () => {
  const properties = [
    {
      option: 'Rent',
      image,
      name: '625 S. Berendo St',
      address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      amount: '$2,265,500',
      bed: '2',
      bath: '2',
      sqMeter: '7,000'
    },
    {
      option: 'Rent',
      image,
      name: '625 S. Berendo St',
      address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      amount: '$2,265,500',
      bed: '2',
      bath: '2',
      sqMeter: '7,000'
    },
    {
      option: 'Rent',
      image,
      name: '625 S. Berendo St',
      address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      amount: '$2,265,500',
      bed: '2',
      bath: '2',
      sqMeter: '7,000'
    },
    {
      option: 'Rent',
      image,
      name: '625 S. Berendo St',
      address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      amount: '$2,265,500',
      bed: '2',
      bath: '2',
      sqMeter: '7,000'
    },
    {
      option: 'Rent',
      image,
      name: '625 S. Berendo St',
      address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      amount: '$2,265,500',
      bed: '2',
      bath: '2',
      sqMeter: '7,000'
    },
    {
      option: 'Rent',
      image,
      name: '625 S. Berendo St',
      address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      amount: '$2,265,500',
      bed: '2',
      bath: '2',
      sqMeter: '7,000'
    },
    {
      option: 'Rent',
      image,
      name: '625 S. Berendo St',
      address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      amount: '$2,265,500',
      bed: '2',
      bath: '2',
      sqMeter: '7,000'
    },
    {
      option: 'Rent',
      image,
      name: '625 S. Berendo St',
      address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      amount: '$2,265,500',
      bed: '2',
      bath: '2',
      sqMeter: '7,000'
    },
    {
      option: 'Rent',
      image,
      name: '625 S. Berendo St',
      address: '625 S. Berendo St Unit 607 Los Angeles, CA 90005',
      amount: '$2,265,500',
      bed: '2',
      bath: '2',
      sqMeter: '7,000'
    }
  ];
  return (
    <div class='site-section site-section-sm bg-light'>
      <div class='container'>
        <div class='row mb-5'>
          {properties.map(property => (
            <div class='col-md-6 col-lg-4 mb-4'>
              <div class='property-entry h-100'>
                <NavLink to='/property-details' class='property-thumbnail'>
                  <div class='offer-type-wrap'>
                    {/* <span class="offer-type bg-danger">Sale</span> */}
                    <span class='offer-type bg-success'>{property.option}</span>
                  </div>
                  <img src={property.image} alt='property' class='img-fluid' />
                </NavLink>
                <div class='p-4 property-body'>
                  <NavLink to='#' class='property-favorite'>
                    <span class='icon-heart-o'></span>
                  </NavLink>
                  <h2 class='property-title'>
                    <NavLink to='/property-details'>{property.name}</NavLink>
                  </h2>
                  <span class='property-location d-block mb-3'>
                    <span class='property-icon icon-room'></span>{' '}
                    {property.address}
                  </span>
                  <strong class='property-price text-primary mb-3 d-block text-success'>
                    {property.amount}
                  </strong>
                  <ul class='property-specs-wrap mb-3 mb-lg-0'>
                    <li>
                      <span class='property-specs'>Beds</span>
                      <span class='property-specs-number'>
                        {property.bed} <sup>+</sup>
                      </span>
                    </li>
                    <li>
                      <span class='property-specs'>Baths</span>
                      <span class='property-specs-number'>{property.bath}</span>
                    </li>
                    <li>
                      <span class='property-specs'>SQ FT</span>
                      <span class='property-specs-number'>
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
      <div class='row'>
        <div class='col-md-12 text-center'>
          <div class='site-pagination'>
            <NavLink to='#' class='active'>
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

export default Properties;
