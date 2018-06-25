import {AxiosResponse} from 'axios';
import {SET_SELECTED_WISH} from '../actions/action_list';

interface IAction{
    type: string,
    payload: AxiosResponse<IWish>
}

export default function SetSelectedWishReducer(state: IWish, action: IAction ){
    switch(action.type){
        case SET_SELECTED_WISH: 
        if(action.payload.data !== undefined){
            return {state,...action.payload.data};
        }
            return {state,...action.payload};
        default:
            return state || {} as IWish;
    }
}