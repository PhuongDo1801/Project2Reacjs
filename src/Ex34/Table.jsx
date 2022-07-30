import { useState } from "react";
import "./App.css";
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useMemo } from "react";
import diamond from '../assets/diamond.png';
import mario from '../assets/mario.png';

const Normal = {
    type: 0,
    color: "white",
    url: ""
};
const Block = {
    type: 1,
    color: "blue",
    url: ""
};
const Diamond = {
    type: 2,
    color: "",
    url: diamond
};
const Mario = {
    type: 3,
    color: "",
    url: mario
}

const getSquares = (width,height,blocks, diamonds, marios)=>{
    const squares = [];
    for(let i = 0 ; i < width ; ++i){
        let row = [];
        for(let j = 0 ; j < height ;++j){
            row.push(Normal);
        }
        squares.push(row);
    }
    for(const block  of blocks){
        squares[block.x][block.y] = Block;
    }

    for(const diamond of diamonds){
        squares[diamond.x][diamond.y] = Diamond;
    }

    squares[marios.x][marios.y] = Mario;

    return squares;
}

const checkup = (mario, blocks) => {
    for(const block of blocks){
       if(block.x === mario.x - 1 && block.y === mario.y){
            return false;
       }
    }
    return true;
}
const checkdown = (mario, blocks) => {
    for(const block of blocks){
       if(block.x === mario.x + 1  && block.y === mario.y){
            return false;
       }
    }
    return true;
}
const checkleft = (mario, blocks) => {
    for(const block of blocks){
       if(block.x === mario.x && block.y === mario.y - 1){
            return false;
       }
    }
    return true;
}
const checkright = (mario, blocks) => {
    for(const block of blocks){
       if(block.x === mario.x && block.y === mario.y + 1){
            return false;
       }
    }
    return true;
}
const BLOCK_INIT = [
    {x: 1, y: 3},{x: 1, y: 4},{x: 1, y: 5},
    {x: 3, y: 1},{x: 3, y: 2},{x: 3, y: 3},{x: 3, y: 0},
    {x: 5, y: 2},{x: 5, y: 3},{x: 5, y: 4},{x: 5, y: 5}
]

const DIAMOND_INIT = [
    {x: 0, y: 4}
]

const MARIO_INIT = {x: 7, y: 0 }

    
export default function App() {
    const [move, setMove] = useState(MARIO_INIT);
    const [control, setControl] = useState('');
    const squares = useMemo(()=>{
        return getSquares(8,6,BLOCK_INIT, DIAMOND_INIT, move)
    },[move])

    const moveMario = (e) => {
        if(control === "Up" && move.x !== 0 && checkup(move, BLOCK_INIT)){
            setMove({
                ...move,
                x : move.x-1
            })
        }
        if(control === "Down" && move.x !== 7 && checkdown(move, BLOCK_INIT)){
            setMove({
                ...move,
                x: move.x+1
            })
        }
        if(control === "Left" && move.y !== 0 && checkleft(move, BLOCK_INIT)){
            setMove({
                ...move,
                y: move.y-1
            })
        }
        if(control === "Right" && move.y !== 5 && checkright(move, BLOCK_INIT)){
            setMove({
                ...move,
                y: move.y+1
            })
        }
    }
    const done = () => {
        if(move.x === 0 && move.y === 4){
            alert("Chúc mừng bạn!");
            move.x = 7;
            move.y = 0;
        }

    }

    const moveUp = () => {
        if(move.x !== 0 && checkup(move, BLOCK_INIT)){
            setMove({
                ...move,
                x : move.x-1
            })
        }
    }
    const moveDown = () => {
        if(move.x !== 7 && checkdown(move, BLOCK_INIT)){
            setMove({
                ...move,
                x: move.x+1
            })
        }
    }
    const moveLeft = () => {
        if(move.y !== 0 && checkleft(move, BLOCK_INIT)){
            setMove({
                ...move,
                y: move.y-1
            })
        }
    }
    const moveRight = () => {
        if(move.y !== 5 && checkright(move, BLOCK_INIT)){
            setMove({
                ...move,
                y: move.y+1
            })
        }
    }


    const moveByKey = (event) => {
        if(event.key === "ArrowUp" && move.x !== 0 && checkup(move, BLOCK_INIT)){
            setMove({
                ...move,
                x : move.x-1
            })
        }
        if(event.key === "ArrowDown" && move.x !== 7 && checkdown(move, BLOCK_INIT)){
            setMove({
                ...move,
                x: move.x+1
            })
        }
        if(event.key === "ArrowLeft" && move.y !== 0 && checkleft(move, BLOCK_INIT)){
            setMove({
                ...move,
                y: move.y-1
            })
        }
        if(event.key === "ArrowRight" && move.y !== 5 && checkright(move, BLOCK_INIT)){
            setMove({
                ...move,
                y: move.y+1
            })
        }
    }
    return (
        <div className="container">
            <div className="box">
            <Box my={2} mx={2} sx={{width: 420, height: 560}}>
                {
                    squares.map((square, index) =>( 
                        <div key={index} style={{display: "flex" }}>
                            {square.map((item, index) => (
                                <Box 
                                    key = {index}
                                    px= {'auto'} sx={{
                                    border: "1px solid grey", 
                                    width: 70, 
                                    height: 70,
                                    backgroundColor: item.color
                                    }}>
                                    { item.url && <img src={item.url} onerror="this.style.display='none'" alt="" className="item-img"/>}
                                </Box>
                            ))} 
                        </div>
                    ))
                }
            </Box>
            </div>
            <div className="box">
                <Box my={2} mx={'auto'} sx={{ width: 420, height: 560}}>
                    <div className="handle-input">
                        <input type="text" value={control} onChange={(e) => setControl(e.target.value)}/>
                        <button className="btn" onClick={moveMario}>Add action</button>
                    </div>
                    <div className="btn-input">
                        <button className="btn btn-up" onClick={moveUp}>Up</button>
                        <button className="btn btn-left" onClick={moveLeft}>Left</button>
                        <button className="btn btn-right" onClick={moveRight}>Right</button>
                        <button className="btn btn-down" onClick={moveDown}>Down</button>
                    </div>
                    {/* <input type="text" id="one" onKeyPress={this.moveByKey} /> */}
                </Box>
            </div>
            {/* {moveByKey()} */}
            {done()}
        </div>
    )
}   

