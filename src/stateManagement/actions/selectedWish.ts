import store from '../reducers/index';
import { SET_SELECTED_WISH } from './action_list';

export const setSelectedWish = (wishId:number) => {

  const wishSelected = store.getState().wishes.filter( w => w.id === wishId);
  return {
    payload: wishSelected.length>0?wishSelected[0]:null,
    type: SET_SELECTED_WISH
  };
}