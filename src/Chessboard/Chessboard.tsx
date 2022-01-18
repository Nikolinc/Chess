import React from 'react';
import ReactDOM from 'react-dom';
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
   pleces.push({image:"https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/pawn_b.png?raw=true",x: i,y:6});
   pleces.push({image:"https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/pawn_w.png?raw=true",x: i,y:1}); 
}

for(let i = 0; i<2; i++){
    
    const type =(i === 0? "b" : "w");
    const y =(i === 0? 7 : 0);

    pleces.push({image:`https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/rook_${type}.png?raw=true`,x: 0,y}); 
    pleces.push({image:`https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/rook_${type}.png?raw=true`,x: 7,y});
    pleces.push({image:`https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/knight_${type}.png?raw=true`,x: 1,y}); 
    pleces.push({image:`https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/knight_${type}.png?raw=true`,x: 6,y});
    pleces.push({image:`https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/bishop_${type}.png?raw=true`,x: 2,y}); 
    pleces.push({image:`https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/bishop_${type}.png?raw=true`,x: 5,y});
    pleces.push({image:`https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/queen_${type}.png?raw=true`,x: 3,y}); 
    pleces.push({image:`https://raw.githubusercontent.com/Nikolinc/Chess/main/src/assets/images/king_${type}.png?raw=true`,x: 4,y}); 
}

let activePiece:HTMLElement|null = null;

function grapPiece(e: React.MouseEvent<HTMLDivElement,MouseEvent>){
    const element = e.target as HTMLElement;
    if(element.classList.contains("chess-piece")){
        const x = e.clientX-50;
        const y = e.clientY-50;
        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top  = `${y}px`;
        activePiece = element;
    }
}

function movePiece(e: React.MouseEvent){

    if(activePiece){
        const x = e.clientX-50;
        const y = e.clientY-50;
        activePiece.style.position = "absolute";
        activePiece.style.left = `${x}px`;
        activePiece.style.top  = `${y}px`;
    }
}

function dropPiece(e: React.MouseEvent){
    if(activePiece){
        activePiece = null;
    }
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
            board.push(<Tile key = {`${i},${j}`} number = {i+j} image ={image}/>);
        }
    }
    return <div 
        onMouseMove = {e => movePiece(e)} 
        onMouseDown = {e => grapPiece(e)}
        onMouseUp   = {e => dropPiece(e)} 
        id = "Chessboard">
        {board}
        
    </div> 
}