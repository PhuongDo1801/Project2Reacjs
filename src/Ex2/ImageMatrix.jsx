import { useState } from "react";
import "./App.css";
import backgroundUrl from "../assets/background.png";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function App() {

  const [row, setRow] = useState('')
  const [col, setCol]= useState('')
  
  const handleOnChangeRow=(e) => {
    if(e.target.value===''){
        setRow(null);
    }else if(parseInt(e.target.value) < 0 || isNaN(parseInt(e.target.value))){
        alert('vui lòng nhập số và số đó lớn hơn 0');
    }else{
      setRow(parseInt(e.target.value))
    }
  }

  const handleOnChangeCol=(e) => {
    if(e.target.value===''){
        setCol(null);
    }else if(parseInt(e.target.value) < 0 || isNaN(parseInt(e.target.value)) ){
        alert('vui lòng nhập số và số đó lớn hơn 0');
    }else{
      setCol(parseInt(e.target.value))
    }
  }

  return (
    <div className="image-matrix">
      <form>
      <label>Row:</label>
      <input  type="text" value={row} onChange={handleOnChangeRow}/>
      <label>Col:</label>
      <input type="text" value={col} onChange={handleOnChangeCol}/>
      </form>
      <Box mx = {'auto'} my={2} sx={{ flexGrow: 1, width: 1000 }}>
      {[...Array(row)].map(() => (
        <div style={{ display: "flex" }}>
            {[...Array(col)].map(() => (
            <Grid px= {'auto'} item xs={1}>
              { row && col && <img className='avatar matrix' src={backgroundUrl} alt="" />}
            </Grid>
            ))}
        </div>
        ))}
      </Box>
  </div>
  );
}