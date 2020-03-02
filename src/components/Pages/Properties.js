import React from 'react';
import { Link } from 'react-router-dom';

const Properties = () => {
  return(
    <div>
      <div className="site-section site-section-sm pb-0">
        <div className="container">
          <div className="row">
            <form className="form-search col-md-12" style= {{ marginTop: "-100px" }}>
              <div className="row  align-items-end">
                <div className="col-md-3">
                  <label for="list-types">Listing Types</label>
                  <div className="select-wrap">
                    <span className="icon icon-arrow_drop_down"></span>
                    <select name="list-types" id="list-types" className="form-control d-block rounded-0">
                      <option value="">Condo</option>
                      <option value="">Commercial Building</option>
                      <option value="">Land Property</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <label for="offer-types">Offer Type</label>
                  <div className="select-wrap">
                    <span className="icon icon-arrow_drop_down"></span>
                    <select name="offer-types" id="offer-types" className="form-control d-block rounded-0">
                      <option value="">For Sale</option>
                      <option value="">For Rent</option>
                      <option value="">For Lease</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <label for="select-city">Select City</label>
                  <div className="select-wrap">
                    <span className="icon icon-arrow_drop_down"></span>
                    <select name="select-city" id="select-city" className="form-control d-block rounded-0">
                      <option value="">New York</option>
                      <option value="">Brooklyn</option>
                      <option value="">London</option>
                      <option value="">Japan</option>
                      <option value="">Philippines</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <input type="submit" className="btn btn-success text-white btn-block rounded-0" value="Search" />>
                </div>
              </div>
            </form>
          </div>  

        <div className="row">
          <div className="col-md-12">
            <div className="view-options bg-white py-3 px-3 d-md-flex align-items-center">
              <div className="mr-auto">
                <Link to="index.html" className="icon-view view-module active"><span className="icon-view_module"></span></Link>
                <Link to="view-list.html" className="icon-view view-list"><span className="icon-view_list"></span></Link>
                
              </div>
              <div className="ml-auto d-flex align-items-center">
                <div>
                  <Link to="#" className="view-list px-3 border-right active">All</Link>
                  <Link to="#" className="view-list px-3 border-right">Rent</Link>
                  <Link to="#" className="view-list px-3">Sale</Link>
                </div>


                <div className="select-wrap">
                  <span className="icon icon-arrow_drop_down"></span>
                  <select className="form-control form-control-sm d-block rounded-0">
                    <option value="">Sort by</option>
                    <option value="">Price Ascending</option>
                    <option value="">Price Descending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>

    <div className="site-section site-section-sm bg-light">
      <div className="container">
      
        <div className="row mb-5">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
              <Link to="property-details.html" className="property-thumbnail">
                <div className="offer-type-wrap">
                  <span className="offer-type bg-danger">Sale</span>
                  <span className="offer-type bg-success">Rent</span>
                </div>
                <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 property-body">
                <Link to="#" className="property-favorite"><span className="icon-heart-o"></span></Link>
                <h2 className="property-title"><Link to="property-details.html">625 S. Berendo St</Link></h2>
                <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                <ul className="property-specs-wrap mb-3 mb-lg-0">
                  <li>
                    <span className="property-specs">Beds</span>
                    <span className="property-specs-number">2 <sup>+</sup></span>
                    
                  </li>
                  <li>
                    <span className="property-specs">Baths</span>
                    <span className="property-specs-number">2</span>
                    
                  </li>
                  <li>
                    <span className="property-specs">SQ FT</span>
                    <span className="property-specs-number">7,000</span>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
              <Link to="property-details.html" className="property-thumbnail">
                <div className="offer-type-wrap">
                  <span className="offer-type bg-danger">Sale</span>
                  <span className="offer-type bg-success">Rent</span>
                </div>
                <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 property-body">
                <Link to="#" className="property-favorite active"><span className="icon-heart-o"></span></Link>
                <h2 className="property-title"><Link to="property-details.html">871 Crenshaw Blvd</Link></h2>
                <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 1 New York Ave, Warners Bay, NSW 2282</span>
                <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                <ul className="property-specs-wrap mb-3 mb-lg-0">
                  <li>
                    <span className="property-specs">Beds</span>
                    <span className="property-specs-number">2 <sup>+</sup></span>
                    
                  </li>
                  <li>
                    <span className="property-specs">Baths</span>
                    <span className="property-specs-number">2</span>
                    
                  </li>
                  <li>
                    <span className="property-specs">SQ FT</span>
                    <span className="property-specs-number">1,620</span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
              <Link to="property-details.html" className="property-thumbnail">
                <div className="offer-type-wrap">
                  <span className="offer-type bg-info">Lease</span>
                </div>
                <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 property-body">
                <Link to="#" className="property-favorite"><span className="icon-heart-o"></span></Link>
                <h2 className="property-title"><Link to="property-details.html">853 S Lucerne Blvd</Link></h2>
                <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                <ul className="property-specs-wrap mb-3 mb-lg-0">
                  <li>
                    <span className="property-specs">Beds</span>
                    <span className="property-specs-number">2 <sup>+</sup></span>
                    
                  </li>
                  <li>
                    <span className="property-specs">Baths</span>
                    <span className="property-specs-number">2</span>
                    
                  </li>
                  <li>
                    <span className="property-specs">SQ FT</span>
                    <span className="property-specs-number">5,500</span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
              <Link to="property-details.html" className="property-thumbnail">
                <div className="offer-type-wrap">
                  <span className="offer-type bg-danger">Sale</span>
                  <span className="offer-type bg-success">Rent</span>
                </div>
                <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 property-body">
                <Link to="#" className="property-favorite"><span className="icon-heart-o"></span></Link>
                <h2 className="property-title"><Link to="property-details.html">625 S. Berendo St</Link></h2>
                <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                <ul className="property-specs-wrap mb-3 mb-lg-0">
                  <li>
                    <span className="property-specs">Beds</span>
                    <span className="property-specs-number">2 <sup>+</sup></span>
                    
                  </li>
                  <li>
                    <span className="property-specs">Baths</span>
                    <span className="property-specs-number">2</span>
                    
                  </li>
                  <li>
                    <span className="property-specs">SQ FT</span>
                    <span className="property-specs-number">7,000</span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
              <Link to="property-details.html" className="property-thumbnail">
                <div className="offer-type-wrap">
                  <span className="offer-type bg-danger">Sale</span>
                  <span className="offer-type bg-success">Rent</span>
                </div>
                <img src="images/img_5.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 property-body">
                <Link to="#" className="property-favorite"><span className="icon-heart-o"></span></Link>
                <h2 className="property-title"><Link to="property-details.html">871 Crenshaw Blvd</Link></h2>
                <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 1 New York Ave, Warners Bay, NSW 2282</span>
                <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                <ul className="property-specs-wrap mb-3 mb-lg-0">
                  <li>
                    <span className="property-specs">Beds</span>
                    <span className="property-specs-number">2 <sup>+</sup></span>
                    
                  </li>
                  <li>
                    <span className="property-specs">Baths</span>
                    <span className="property-specs-number">2</span>
                    
                  </li>
                  <li>
                    <span className="property-specs">SQ FT</span>
                    <span className="property-specs-number">1,620</span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
              <Link to="property-details.html" className="property-thumbnail">
                <div className="offer-type-wrap">
                  <span className="offer-type bg-info">Lease</span>
                </div>
                <img src="images/img_6.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 property-body">
                <Link to="#" className="property-favorite"><span className="icon-heart-o"></span></Link>
                <h2 className="property-title"><Link to="property-details.html">853 S Lucerne Blvd</Link></h2>
                <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                <ul className="property-specs-wrap mb-3 mb-lg-0">
                  <li>
                    <span className="property-specs">Beds</span>
                    <span className="property-specs-number">2 <sup>+</sup></span>
                    
                  </li>
                  <li>
                    <span className="property-specs">Baths</span>
                    <span className="property-specs-number">2</span>
                    
                  </li>
                  <li>
                    <span className="property-specs">SQ FT</span>
                    <span className="property-specs-number">5,500</span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
              <Link to="property-details.html" className="property-thumbnail">
                <div className="offer-type-wrap">
                  <span className="offer-type bg-danger">Sale</span>
                  <span className="offer-type bg-success">Rent</span>
                </div>
                <img src="images/img_7.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 property-body">
                <Link to="#" className="property-favorite"><span className="icon-heart-o"></span></Link>
                <h2 className="property-title"><Link to="property-details.html">625 S. Berendo St</Link></h2>
                <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 625 S. Berendo St Unit 607 Los Angeles, CA 90005</span>
                <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                <ul className="property-specs-wrap mb-3 mb-lg-0">
                  <li>
                    <span className="property-specs">Beds</span>
                    <span className="property-specs-number">2 <sup>+</sup></span>
                    
                  </li>
                  <li>
                    <span className="property-specs">Baths</span>
                    <span className="property-specs-number">2</span>
                    
                  </li>
                  <li>
                    <span className="property-specs">SQ FT</span>
                    <span className="property-specs-number">7,000</span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
              <Link to="property-details.html" className="property-thumbnail">
                <div className="offer-type-wrap">
                  <span className="offer-type bg-danger">Sale</span>
                  <span className="offer-type bg-success">Rent</span>
                </div>
                <img src="images/img_8.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 property-body">
                <Link to="#" className="property-favorite"><span className="icon-heart-o"></span></Link>
                <h2 className="property-title"><Link to="property-details.html">871 Crenshaw Blvd</Link></h2>
                <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 1 New York Ave, Warners Bay, NSW 2282</span>
                <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                <ul className="property-specs-wrap mb-3 mb-lg-0">
                  <li>
                    <span className="property-specs">Beds</span>
                    <span className="property-specs-number">2 <sup>+</sup></span>
                    
                  </li>
                  <li>
                    <span className="property-specs">Baths</span>
                    <span className="property-specs-number">2</span>
                    
                  </li>
                  <li>
                    <span className="property-specs">SQ FT</span>
                    <span className="property-specs-number">1,620</span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="property-entry h-100">
              <Link to="property-details.html" className="property-thumbnail">
                <div className="offer-type-wrap">
                  <span className="offer-type bg-info">Lease</span>
                </div>
                <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
              </Link>
              <div className="p-4 property-body">
                <Link to="#" className="property-favorite"><span className="icon-heart-o"></span></Link>
                <h2 className="property-title"><Link to="property-details.html">853 S Lucerne Blvd</Link></h2>
                <span className="property-location d-block mb-3"><span className="property-icon icon-room"></span> 853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005</span>
                <strong className="property-price text-primary mb-3 d-block text-success">$2,265,500</strong>
                <ul className="property-specs-wrap mb-3 mb-lg-0">
                  <li>
                    <span className="property-specs">Beds</span>
                    <span className="property-specs-number">2 <sup>+</sup></span>
                    
                  </li>
                  <li>
                    <span className="property-specs">Baths</span>
                    <span className="property-specs-number">2</span>
                    
                  </li>
                  <li>
                    <span className="property-specs">SQ FT</span>
                    <span className="property-specs-number">5,500</span>
                    
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="site-pagination">
              <Link to="#" className="active">1</Link>
              <Link to="#">2</Link>
              <Link to="#">3</Link>
              <Link to="#">4</Link>
              <Link to="#">5</Link>
              <span>...</span>
              <Link to="#">10</Link>
            </div>
          </div>  
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Properties;