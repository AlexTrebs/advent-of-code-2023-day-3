import React, { useNavigate } from 'react';
import Button from '@mui/material'

export default function FileLoader() {  
  const handleClick = () => {
    const navigate = useNavigate();

    fetch('../assets/input_file.txt')
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    })  
    navigate("/working");
  } 

  return (
    <div>      
      <Button variant="outlined" onClick={this.handleClick} className="FileLoader" name="StartButton">Start</Button>
    </div>
  )
}