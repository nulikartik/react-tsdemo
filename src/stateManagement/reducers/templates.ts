import { AxiosResponse } from 'axios';
import { SET_TEMPLATES } from '../actions/action_list';

interface IAction {
    type: string,
    payload: AxiosResponse<IWish[]>
}

export default function TemplateReducer(state: IWish[] , action: IAction ) {
    switch(action.type){
        case SET_TEMPLATES:
            console.log("action.payload", action.payload.data);
            return [...action.payload.data ];
        default:
            return state || [];
    }
}