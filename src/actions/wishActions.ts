import { fetchWishes } from '../services/wish-service/index';
import { SET_WISHES } from './actions_list';

export const setWishes = () => {
  const data = fetchWishes();  
  console.log(data);
  return {
    payload: data,
    type: SET_WISHES
  };
}