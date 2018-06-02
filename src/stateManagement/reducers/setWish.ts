import {SET_SELECTED_WISH} from '../actions/action_list';

interface IAction{
    type: string,
    payload: IWish
}

export default function SetSelectedWishReducer(state: IWish, action: IAction ){
    switch(action.type){
        case SET_SELECTED_WISH: 
            return action.payload;
        default:
            return state || {} as IWish;
    }
}