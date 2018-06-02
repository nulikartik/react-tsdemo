import { AxiosResponse } from 'axios';
import { SET_WISHES } from '../actions/action_list';

interface IAction {
    type: string,
    payload: AxiosResponse<IWish[]>
}

export default function WishReducer(state: IWish[] , action: IAction ) {
    switch(action.type){
        case SET_WISHES:
            console.log("action.payload", action.payload.data);
            return [...action.payload.data ];
        default:
            return state || [];
    }
}