import React from 'react';
import axios from 'axios';
import Card from "@material-ui/core/Card";


export default function News() {

    return(
        // <div>
        //     <h1 id = "newsHeader">Current Finance News</h1>
        //     <GetNews />
        // </div>
        null
    )
}

function GetNews() {
    axios.get('http:api.datanews.io/v1/news?q=stockmarket&topic=business&from=2021-01-01&apiKey=09ezix3qum8xu1f6f5l6womob').then(res => {
    for (let i = 0 ; i <3 ; i++) {
        let head = res.data.hits[i].title;
        let img = res.data.hits[i].imageUrl;
        let desc = res.data.hits[i].description;

        return(
            <Card>
                <p className = "headline">{head}</p>
                <img className = "newImg" src = {img} alt = '{i} story image'></img>
                <p className = "description">{desc}</p>
            </Card>
        )
    }
});
}