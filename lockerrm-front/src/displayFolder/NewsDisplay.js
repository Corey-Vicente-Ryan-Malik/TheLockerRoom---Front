import React from 'react';
import NewsData from '../dataFolder/NewsData';



export default function NewsDisplay() {
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

            // const user = {
            //     "username": data.username, "firstName": data.firstName, "lastName": data.lastName,
            //     "email": data.email, "id": data.id, "posts": data.posts, "roles": data.roles, "favTeam": data.favTeam,
            // }





        });
  return <NewsData />;
}
