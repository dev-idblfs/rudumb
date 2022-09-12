import './App.css';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/system/Box';
// import './services/db';





function BasicCard() {
  const [css, setcss] = useState({});
  const [yes, setyes] = useState("R u dumb?");
  const [visible, setvisible] = useState(true);

  const handleClick2 = () => {
    setyes("Yeah, I knew it!")
    setvisible(false)
  }
  const handleClick = () => {
    let { innerWidth: width, innerHeight: height } = window;
    width = 0 + (Math.random() * (width - 0));
    height = 0 + (Math.random() * (height - 0));
    setcss({ position: "absolute", left: `${width}px`, top: `${height}px` })
  }

  return (
    <Card sx={{ minWidth: 275, minHeight: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, }} color="text.secondary" gutterBottom>
          Coold
        </Typography>
        <Divider />
        <Typography variant="h5" component="div" sx={{ padding: 5 }} >
          {yes}
        </Typography>
        {visible ? <Box>
          <Button variant="outlined" color="error" sx={{ marginRight: 1 }}
            onClick={handleClick2} >Yes</Button>
          <Button variant="outlined" onClick={handleClick} sx={{ ...css }}>No </Button>
        </Box> : ""}
      </CardContent>
      <CardActions>
      </CardActions>
    </Card >
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {BasicCard()}
      </header>
    </div>
  );
}

export default App;
