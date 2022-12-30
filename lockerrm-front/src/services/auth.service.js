import axios from 'axios';
const API_URL = 'http://localhost:8080/oauth/token';

class AuthService {
<<<<<<< HEAD
    login(username, password, grant_type, user) {
        return fetch("http://localhost:8080/oauth/token", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + btoa('sports-app-client:secret'),
                    },
                    body: `grant_type=${user.grant_type}&username=${user.username}&password=${user.password}&client_id=sports-app-client`
                }).then(data => data.json())
                    .then(data => {
                        if (data.access_token && data.refresh_token) {
                            console.log("storing token...")
                            localStorage.setItem('access_token', data.access_token);
                            localStorage.setItem("refresh_token", data.refresh_token);
                            console.log("Refresh token set")
                            localStorage.setItem('user', JSON.stringify(user));
                        }
                    })

    }
    logout(){
        localStorage.clear()
    }v
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
=======
  login(username, password) {
    return axios
      .post(API_URL + '/', {
        username,
        password,
      })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(firstname, lastname, email, username, password, favoriteTeam) {
    return axios.post(API_URL + '/register', {
      firstname,
      lastname,
      email,
      username,
      password,
      favoriteTeam,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
>>>>>>> 6e2d66d9ecff10b7dbf2b328dfc4d1cf7b6293ef
}
export default new AuthService();
