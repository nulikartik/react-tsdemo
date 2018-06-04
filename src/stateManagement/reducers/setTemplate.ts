import {SET_SELECTED_TEMPLATE} from '../actions/action_list';

interface IAction{
    type: string,
    payload: ITemplate
}

export default function SetSelectedTEMPLATEReducer(state: ITemplate, action: IAction ){
    switch(action.type){
        case SET_SELECTED_TEMPLATE: 
            return action.payload;
        default:
            return state || {} as ITemplate;
    }
}