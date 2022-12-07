import React, { useEffect, useState } from 'react'


const Schedule = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '030599a025msh7d87a89a5158c47p19faabjsnf8d88956da48',
                'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com'
            }
        };

        fetch('https://nfl-api1.p.rapidapi.com/nflschedule?year=2022&month=12&day=30', options)
            .then((response) => response.json)
            .then((allData) => {
                console.log(allData);
                setData(allData.games)
                console.log(data);
            })
            .catch((error) => {
                console.log(error)
            }); 
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className="container">

            <tbody>
                <tr>
                    <th>Home</th>
                    <th>Away</th>
                </tr>
                {data.map((games, index) => (
                <tr key={index}>
                    <td>{games[0].competitions.competitors[0]}</td>
                    <td>{games[0].competitions.competitors[1]}</td>
                </tr>
                ))}
            </tbody>
            
        </div>
    )
}   

export default Schedule