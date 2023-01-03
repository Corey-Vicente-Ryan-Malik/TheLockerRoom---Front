import React from 'react';
import HomeData from '../dataFolder/HomeData';
import authService from "../services/auth.service";

export default function HomeDisplay() {
  const API = "http://localhost:8080/user/";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("access_token")
    },
  }
  fetch(API, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
      });
  return <HomeData />;
}

