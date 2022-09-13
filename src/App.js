import './App.css';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/system/Box';
import Link from '@mui/material/Link';
// import './services/db';





function BasicCard() {
  const [css, setcss] = useState({});
  const [yes, setyes] = useState("Are you dumb?");
  const [visible, setvisible] = useState(true);
  let ryms = [
    "Yeah, I knew it!",
    "You are dumb!",
    "Dumb, You just accepted it",
  ]

  let ryms2 = [
    "Are u sure?",
    "No, You are!",
    "Please accept it!",
    "I have Proof!",
    "Are you dumb?",
    "Yes You are dumb?"
  ]


  const handleClick2 = () => {
    console.log(ryms.length);
    setyes(ryms[(Math.random() * (ryms.length - 1)).toFixed()])
    setvisible(false)
  }
  const handleClick = () => {
    let { innerWidth: width, innerHeight: height } = window;
    console.log(width, height);
    width = 0 + (Math.random() * (width - 0));
    height = 0 + (Math.random() * (height - 0));
    setyes(ryms2[(Math.random() * (ryms2.length - 1)).toFixed()])
    setcss({ position: "absolute", left: `${width}px`, top: `${height}px`, backgroundColor: '#fff' })
  }

  return (
    <Card sx={{
      minWidth: 275, minHeight: 300,
    }}>
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
          <Button variant="contained" onClick={handleClick} sx={{ ...css }}>No </Button>
        </Box> : ""}
      </CardContent>
      <CardActions>
      </CardActions>
    </Card >
  );
}



function App() {
  return (
    <div className="App" title='idblfs'>
    <Box component={"span"} sx={{ position: "relative", top: 20, backgroundColor:'Highlight' }}>
        Developed By <Link title='developer.idblfs' href="https://github.com/dev-idblfs" underline="none">
          developer.idblfs
        </Link>
      </Box>
      <header className="App-header">
        {BasicCard()}
      </header>
    </div>
  );
}

export default App;
