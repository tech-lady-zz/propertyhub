import React, { useState, useEffect } from 'react';
import Property from '../Property'

function Properties() {
  const [properties, setProperties] = useState([]);
  const [error, setErrors] = useState({});

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const API_URL = "http://localhost:5050/properties"
    const response = await fetch(API_URL)
    const data = await response.json();
    setProperties(data);
  }
  return (
    <div>
       <div className="row mb-5">
         {/* properties.map then render single property */}
         {properties.map(property => (
           <Property
            key={property.id}
            address={property.address}
            baths={property.baths}
            beds={property.beds}
            image_url={property.image_url}
            name={property.name}
            price={property.price}
            sq_ft={property.sq_ft}
            property_type={property.property_type}
           />
         ))}
           
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="site-pagination">
              <a href="#" className="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <span>...</span>
              <a href="#">10</a>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default Properties;
