import axios from 'axios';
import * as WishAPIs from './api_urls';

export const fetchWishes = () => axios.get(WishAPIs.GET_WISHES);
export const fetchTemplates = (id:number) => 
        WishAPIs.GETC_TEMPLATES_BY_WISHID(id) !== "INVALID" ? 
                axios.get(WishAPIs.GETC_TEMPLATES_BY_WISHID(id)) :
                    "INVALID" ;
export const fetchWishById = (id: number) => 
        WishAPIs.GETC_WISH_BY_ID(id) !== "INVALID" ?
                axios.get(WishAPIs.GETC_WISH_BY_ID(id)) :
                        "INVALID" ;


