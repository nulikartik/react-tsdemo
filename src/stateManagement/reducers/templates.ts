import { AxiosResponse } from 'axios';
import { SET_TEMPLATES } from '../actions/action_list';

interface IAction {
    type: string,
    payload: AxiosResponse<ITemplate[]>
}

export default function TemplateReducer(state: ITemplate[] , action: IAction ) {
    switch(action.type){
        case SET_TEMPLATES:
            console.log("action.payload", action.payload.data);
            return [...action.payload.data ];
        default:
            return state || [];
    }
}