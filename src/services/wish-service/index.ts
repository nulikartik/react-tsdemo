import axios from 'axios';
import * as WishAPIs from './api_urls';

export const GET_WISHES = () => axios.get(WishAPIs.GET_WISHES);



