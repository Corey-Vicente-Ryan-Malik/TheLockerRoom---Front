import axios from "axios";
const API_URL = "http://localhost:8080/oauth/token"

class AuthService {
    async login(username, password, grant_type = "password") {
        return await fetch("http://localhost:8080/oauth/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa('sports-app-client:secret'),
            },
            body: `grant_type=${grant_type}&username=${username}&password=${password}&client_id=sports-app-client`
        }).then(data => data.json())
            .then(data => {
                console.log(data);
                if (data.access_token) {
                    console.log("storing token...")
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem("username", username);
                }
                if (data.refresh_token) {
                    localStorage.setItem("refresh_token", data.refresh_token);
                    console.log("Refresh token set")
                }
            })
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
        return JSON.stringify(localStorage.getItem("username"));
    }
}
export default new AuthService();