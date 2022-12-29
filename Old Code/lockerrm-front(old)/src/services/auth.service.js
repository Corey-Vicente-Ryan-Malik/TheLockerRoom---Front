import axios from "axios";
const API_URL = "http://localhost:8080/oauth/token"

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "/", {
                username,
                password
            }).then(response => {
                if(response.data.access_token){
                    localStorage.setItem("user", JSON.stringify(response.data))
                }
                return response.data;
            });

    }
    logout(){
        localStorage.removeItem("user");
    }
    register(firstname, lastname, email, username, password, favoriteTeam){
        return axios.post(API_URL + "/register",{
            firstname,
            lastname,
            email,
            username,
            password,
            favoriteTeam,
        });
    }
    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}
export default new AuthService();