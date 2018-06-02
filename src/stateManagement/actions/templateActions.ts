import { fetchTemplates } from '../../services/wishCard/index';
import { SET_TEMPLATES } from './action_list';

export const setTemplates = (wishId:number) => {
  const data = fetchTemplates(wishId);  
  console.log(data);
  return {
    payload: data,
    type: SET_TEMPLATES
  };
}