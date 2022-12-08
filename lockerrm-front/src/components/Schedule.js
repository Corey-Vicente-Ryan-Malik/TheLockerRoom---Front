import React from 'react';

class Schedule extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }


    componentDidMount() {
        const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
                    'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com'
                }
            };

            fetch('https://nfl-api1.p.rapidapi.com/nflschedule?year=2022&month=12&day=30', options)
                .then((response) => response.json())
                .then((json) => {
                    this.setState({
                        items: json,
                        DataisLoaded: true
                    });
                })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if(!DataisLoaded) return <div>
            <h1> Loading... </h1>
        </div>;

        return (
            <div className="schedule">
                {items.map((item) => (
                    <ol key={ item.games }>
                        <li> { item.games[0].competitors[0] } </li>
                    </ol>
                ))}
            </div>
        )
    }
}

        

  
export default Schedule