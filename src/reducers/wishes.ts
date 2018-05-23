import { SET_WISHES } from '../actions/actions_list';

interface IAction {
    type: string,
    payload: IWish 
}

export default function WishReducer(state: IWish[] , action: IAction ) {
    switch(action.type){
        case SET_WISHES:
            return [...state, action.payload ];
        default:
            return state || [];
    }
}