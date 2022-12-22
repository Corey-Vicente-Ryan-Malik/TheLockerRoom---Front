import {useNavigate} from "react-router-dom";

function Home () {

    const options = {
        method: 'GET',
        headers: {
            source: '3',
            'X-RapidAPI-Key': process.env.newsApiKey,
            'X-RapidAPI-Host': 'nfl-news-api.p.rapidapi.com'
        }
    };

    fetch('https://nfl-news-api.p.rapidapi.com/SourceNews?source=1', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

    return (
        <div className="Home">
            <h1>This is the [ Home page]</h1>
        </div>
    );
}

export default Home ;