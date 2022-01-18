/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import './Tile.css';



export default function Tile(props){

     

    if((props.number)%2 === 0){
        return <div className="tile black-tile">
                   {props.image && <div style = {{backgroundImage: `url(${props.image})`}} className = 'chess-piece'></div>}
                </div>
    }
    else{
         return <div className="tile white-tile">
                 {props.image && <div style = {{backgroundImage: `url(${props.image})`}} className = 'chess-piece'></div>}
              </div>
    }

        
    
}