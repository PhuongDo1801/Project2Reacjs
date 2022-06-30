// import { useState } from "react";
import "./App.css";
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import backgroundUrl from '../assets/background.png';
export default function App() {
    const sqare = {
        Color: "",
        isBlock: "",
        isDiamond:"",
    }
    
    return (
        <div className="container">
            <div className="box">
            <Box my={2} mx={2} sx={{width: 420, height: 560}}>
                {[...Array(8)].map(() => (
                <div style={{display: "flex" }}>
                    {[...Array(6)].map(() => (
                        <Box px= {'auto'} sx={{border: "1px solid grey", width: 70, height: 70 }}>
                            {/* <img className='avatar matrix' src={backgroundUrl} alt="" /> */}
                        </Box>
                    ))}
                </div>
                ))}
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