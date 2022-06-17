import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const ListData = ({ students }) => {
  // const history = useHistory();
  return (
    <div className='list-data'>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "1000px", borderStyle: "solid", borderWidth: '1px', borderRadius: '10px',}}>
        {/* <TableContainer component={Paper}> */}
          <Table sx={{ minWidth: 800 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">STT</TableCell>
                <TableCell align="right">MSSV</TableCell>
                <TableCell align="right">NAME</TableCell>
                <TableCell align="right">DOB</TableCell>
                <TableCell align="right">EMAIL</TableCell>
                <TableCell align="right">DELETE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student)=>(
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">{student.id}</TableCell>
                  <TableCell align="right">{student.mssv}</TableCell>
                  <TableCell align="right">{student.name}</TableCell>
                  <TableCell align="right">{student.dob}</TableCell>
                  <TableCell align="right">{student.email}</TableCell>
                  <TableCell align="right"><button onClick={() => {
                        fetch('http://localhost:8000/students/' + student.id, {
                          method: 'DELETE'
                        }).then(() => {
                          window.location.reload(false);
                        }) 
                  }}>Delete</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        {/* </TableContainer> */}

        </div>
      </div>
    </div>
  );
}
 
export default ListData;