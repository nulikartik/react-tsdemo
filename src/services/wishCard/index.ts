import axios from 'axios';
import * as WishAPIs from './api_urls';

export const fetchWishes = () => axios.get(WishAPIs.GET_WISHES);



