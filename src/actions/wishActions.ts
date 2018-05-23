import { SET_WISHES } from './actions_list';

export const setWishes =  function(data:string) {
  console.log(data);
  return {
    type: SET_WISHES,
    payload: data
  };
} 