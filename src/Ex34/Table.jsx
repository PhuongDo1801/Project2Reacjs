// import { useState } from "react";
import "./App.css";
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useMemo } from "react";
// import backgroundUrl from '../assets/background.png';


const Block = {
    type: 1,
    color: "blue"
};
const Diamond = {
    type: 2,
    color: "red"
};
const Normal = {
    type: 0,
    color: "white"
};

const getSquares = (width,height,blocks, diamonds)=>{
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

    return squares;
}

const BLOCK_INIT = [
    {x: 1, y: 3},{x: 1, y: 4},{x: 1, y: 5},
    {x: 3, y: 1},{x: 3, y: 2},{x: 3, y: 3},{x: 3, y: 0},
    {x: 5, y: 2},{x: 5, y: 3},{x: 5, y: 4},{x: 5, y: 5}
]

const DINAMON_INIT = [
    {x: 0, y: 4}
]
export default function App() {
   const squares = useMemo(()=>{
        return getSquares(8,6,BLOCK_INIT, DINAMON_INIT)
   },[])
    
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
                                    {/* <img className='avatar matrix' src={backgroundUrl} alt="" /> */}
                                </Box>
                            ))}
                        </div>
                    ))
                }
            </Box>
            </div>
            <div className="box">
                <Box my={2} mx={'auto'} sx={{ width: 420, height: 560}}>
                    <form action="">
                        <input type="text" />
                        <button className="btn">Add action</button>
                    </form>
                </Box>
            </div>
        </div>
    )
}   

