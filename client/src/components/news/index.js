import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "@material-ui/core/Card";


export default function News() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http:api.datanews.io/v1/news?q=stockmarket&topic=business&from=2021-01-01&apiKey=09ezix3qum8xu1f6f5l6womob').then(res => {
            console.log(res.data)
            setData(res.data);
          })
        // .catch(error => {
        // console.log("error");
        // }
    // )
    }, [])
    
    
    return(
        <div className = "center">
            <h1 id = "newsHeader">Current Finance News</h1>
            <div>{data}</div>
            {/* <Card className = "newsCard">
                <p className = "headline">{head1}</p>
                 <img className = "newImg" src = {img1} alt = 'first story'></img>
                 <p className = "description">{desc1}</p>
             </Card>
             <Card className = "newsCard">
                <p className = "headline">{head1}</p>
                 <img className = "newImg" src = {img1} alt = 'second story'></img>
                 <p className = "description">{desc1}</p>
             </Card>
             <Card className = "newsCard">
                <p className = "headline">{head1}</p>
                 <img className = "newImg" src = {img1} alt = 'third story'></img>
                 <p className = "description">{desc1}</p>
             </Card> */}
        </div>
    )
}