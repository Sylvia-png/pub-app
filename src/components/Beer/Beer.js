import React from 'react';
import "./beer.css";
import LikeButton from './LikeButton';

const Beer = (props) =>{
    //console.log(props);

    return (
    <li className="beer_list-item">
        <h1>{props.beer.name}</h1>
        <p>{props.beer.tagline}</p>
        <p>{props.beer.first_brewed}</p>
        <img src={props.beer.image_url} className="beer_image"/>
        <LikeButton/>
    </li>
    );

};

export default Beer;
