import { SET_WISHES } from './actions_list';

export const setWishes = (data:string) => {
  console.log(data);
  return {
    payload: data,
    type: SET_WISHES
  };
}