import setAuthToken from '../utils/setAuthToken';

import axios from 'axios';

const BASE_URL = 'https://env-hero-api.herokuapp.com/incident';
export const addDangerZone =(zone,token)=>async dispatch =>{
    setAuthToken(token);

    try {
     let  result= await axios.post(BASE_URL+'/create',zone)
     console.log(result);
    } catch (error) {
        console.log(result)
    }
}