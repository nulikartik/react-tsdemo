import store from '../reducers/index';
import { SET_SELECTED_TEMPLATE } from './action_list';

export const setSelectedTemplate = (templateId:number) => {

  const templateSelected = store.getState().templates.filter( t => t.id === templateId);
  return {
    payload: templateSelected.length>0?templateSelected[0]:null,
    type: SET_SELECTED_TEMPLATE
  };
}