import axios from "axios";
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/oauth/token';

class UserServices{
    getPublicContent(){
        return axios.get(API_URL + '/all');
    }
    getUserContent(){
        return axios.get(API_URL + '/users',{ headers: authHeader()});
    }
    getForum(){
        return axios.get(API_URL + '/forum',{ headers: authHeader()});
    }

}
export default new UserServices();