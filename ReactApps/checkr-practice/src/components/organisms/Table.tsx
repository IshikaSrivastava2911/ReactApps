import { Button, Chip, IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from "@mui/material";
import TableData from '../../TableData.json';
import { ChangeEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { FilterList } from "@mui/icons-material";
import './Table.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Data {
    id:number;
  name: string;
  adjudication: string;
  status: string;
  location: string;
  dateOfJoining: string;
}



export const MyTable=()=> {

  const [data, setData] = useState<Data[]>(TableData);



  const requestSearch=(searchVal: string)=>{
        const filterRow = TableData.filter((data)=>{
            return data.name.toLowerCase().includes(searchVal.toLowerCase());
        });
        setData(filterRow);
  }
  const handleInputChange=(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const value= event.target.value;
    
     
    if (value.length >0){
        
        requestSearch(value); 
    }
    else{
        setData(TableData)
    }
  }

  return (
    <Paper sx={{width:'100%'}}>
        <TableContainer >  
            <Toolbar sx={{display:'flex', justifyContent:'space-around', padding:'2px'}}>
                <Typography variant="h6" component="div">Candidate Details</Typography>
                <TextField 
                    sx={{width:'500px'}}
                    placeholder="Search for candidate"
                    onChange={(e)=> handleInputChange(e)}
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <IconButton >
                            <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                    />
                <Button variant="outlined" ><FilterList />Filter</Button> 
                <Button variant="outlined"><MoreVertIcon /></Button>
            </Toolbar>
        </TableContainer >
        <TableContainer >
        <Table  stickyHeader>
            <TableHead className="tablehead" >
            <TableRow sx={{textWeight:"bolder" }}>
                <TableCell>Name</TableCell>
                <TableCell>Adjudication</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Date</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((item) => (
                <TableRow key={item.id} sx={{'&:last-child td, &:last-child th': {border:0}}}>
                <TableCell>{item.name}</TableCell>
                <TableCell><Chip label={item.adjudication} /></TableCell>
                <TableCell><Chip label={item.status} /></TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.dateOfJoining}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Paper>
  );
}
