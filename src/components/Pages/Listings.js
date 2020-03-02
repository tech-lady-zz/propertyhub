import React from 'react';
import { Link } from 'react-router-dom';

const Listings = () => {
  return(
    <div>
      <div className="site-section site-section-sm pb-0">
          <div className="container">
            <div className="row">
              <form className="form-search col-md-12" style= {{ marginTop: "-100px"}}>
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
                    <input type="submit" className="btn btn-success text-white btn-block rounded-0" value="Search" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>  

        <div class="row">
          <div class="col-md-12">
            <div class="view-options bg-white py-3 px-3 d-md-flex align-items-center">
              <div class="mr-auto">
                <Link to="index.html" class="icon-view view-module active"><span class="icon-view_module"></span></Link>
                <Link to="view-list.html" class="icon-view view-list"><span class="icon-view_list"></span></Link>
                
              </div>
              <div class="ml-auto d-flex align-items-center">
                <div>
                  <Link to="#" class="view-list px-3 border-right active">All</Link>
                  <Link to="#" class="view-list px-3 border-right">Rent</Link>
                  <Link to="#" class="view-list px-3">Sale</Link>
                </div>


                <div class="select-wrap">
                  <span class="icon icon-arrow_drop_down"></span>
                  <select class="form-control form-control-sm d-block rounded-0">
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
  )
}
export default Listings;