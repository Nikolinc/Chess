import React from "react";
import './Chessboard.css';
import Tile from "../Tile/Tile.tsx";


const  verticalAxis   = [1, 2, 3, 4, 5, 6, 7, 8]
const  horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"] 

interface Piece{
    image:string;
    x: number;
    y:number;
}

const pleces : Piece[] = [];
for(let i = 0; i < 8; i++){
   pleces.push({image:"https://github.com/Nikolinc/Chess/blob/main/image/pawn_b.png?raw=true",x: i,y:6});
   pleces.push({image:"https://github.com/Nikolinc/Chess/blob/main/image/pawn_w.png?raw=true",x: i,y:1}); 
}

for(let i = 0; i<2; i++){
    
    const type =(i === 0? "b" : "w");
    const y =(i === 0? 7 : 0);

    pleces.push({image:`https://github.com/Nikolinc/Chess/blob/main/image/rook_${type}.png?raw=true`,x: 0,y}); 
    pleces.push({image:`https://github.com/Nikolinc/Chess/blob/main/image/rook_${type}.png?raw=true`,x: 7,y});
    pleces.push({image:`https://github.com/Nikolinc/Chess/blob/main/image/knight_${type}.png?raw=true`,x: 1,y}); 
    pleces.push({image:`https://github.com/Nikolinc/Chess/blob/main/image/knight_${type}.png?raw=true`,x: 6,y});
    pleces.push({image:`https://github.com/Nikolinc/Chess/blob/main/image/bishop_${type}.png?raw=true`,x: 2,y}); 
    pleces.push({image:`https://github.com/Nikolinc/Chess/blob/main/image/bishop_${type}.png?raw=true`,x: 5,y});
    pleces.push({image:`https://github.com/Nikolinc/Chess/blob/main/image/queen_${type}.png?raw=true`,x: 3,y}); 
    pleces.push({image:`https://github.com/Nikolinc/Chess/blob/main/image/king_${type}.png?raw=true`,x: 4,y}); 
}


export default function Chessboard(){
    let board = [];

     for(let j = verticalAxis.length-1; j>=0 ; j--){
         for(let i = 0; i < horizontalAxis.length; i++){
            let image = undefined;
            
            pleces.forEach( p => {
                if(p.x === i && p.y === j){
                    image = p.image;
                }
            })
            board.push(<Tile number = {i+j} image ={image}/>);
        }
    }
    return <div id = "Chessboard">
        {board}
    </div> 
}