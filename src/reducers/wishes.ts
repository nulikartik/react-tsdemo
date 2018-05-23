import { SET_WISHES } from '../actions/actions_list';

interface Action {
    type: string,
    payload: Wish 
}

export default function WishReducer(state: Wish[] , action: Action ){
    switch(action.type){
        case SET_WISHES:
        if(state)
            return [...state, action.payload ];
        else
            return [action.payload];
        default:
            return state;
    }
}