import axios from 'axios';
import React from 'react';
// import Navbar from '../components/Navbar';

// const API_URL = 'https://lockerrm.us:8080/oauth/token';

class AuthService {
  login(username, password, grant_type, user) {
    return fetch('http://localhost:8080/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('sports-app-client:secret'),
      },
      body: `grant_type=${user.grant_type}&username=${user.username}&password=${user.password}&client_id=sports-app-client`,
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.access_token && data.refresh_token) {
          console.log('storing token...');
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          console.log('Refresh token set');
          localStorage.setItem('user', JSON.stringify(user));
          const API = 'http://localhost:8080/user/';
          const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            },
          };
          fetch(API, options)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              localStorage.setItem('user', JSON.stringify(data));
            });
        }
      });
  }
  logout() {
    localStorage.clear();
    // change url path in production
    window.location.href = 'http://localhost:3000/';
  }
  register(firstname, lastname, email, username, password, favoriteTeam) {
    return axios.post('http://localhost:8080/register', {
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
}
export default new AuthService();
