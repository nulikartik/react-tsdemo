import { fetchWishes } from '../../services/wishCard/index';
import { SET_WISHES } from './action_list';

export const setWishes = () => {
  const data = fetchWishes();  
  console.log(data);
  return {
    payload: data,
    type: SET_WISHES
  };
}