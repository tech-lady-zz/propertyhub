import {TrendingProperties} from '../../utils/MockData';
import {GET_TRENDING_PROPERTIES} from '../types';

const TrendingPropertyReducer = (state = [], action) =>{
    switch (action.type) {
        case GET_TRENDING_PROPERTIES:
            return TrendingProperties;
        default:
           return state;

    }
}
export default TrendingPropertyReducer;
