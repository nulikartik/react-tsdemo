import { AxiosPromise } from 'axios';
import {fetchWishById} from '../../services/wishCard/index';
import store from '../reducers/index';
import { SET_SELECTED_WISH } from './action_list';

export const setSelectedWish = (wishId:number) => {
  const selectedWishes = store.getState().wishes.filter( w => w.id === wishId);
  let wishSelected:IWish | AxiosPromise<IWish> | string | null;

  if(selectedWishes.length === 0){
    wishSelected = fetchWishById(wishId);
  } else {
    wishSelected = selectedWishes.length > 0? selectedWishes[0] : null;
  }
  
  return {
    payload: wishSelected,
    type: SET_SELECTED_WISH
  };
}