import { properties } from '../../utils/MockData';
import { GET_ALL_PROPERTIES } from '../types';

const PropertyReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PROPERTIES:
      return properties;
    default:
      return state;
  }
};
export default PropertyReducer;
