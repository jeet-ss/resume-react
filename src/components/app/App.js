import React from 'react';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import { Paper, } from '@mui/material';
//import { green, lightGreen, lime, orange, yellow, amber } from '@mui/material/colors';


import Home from '../home/Home';
import About from '../about/About';
import Experience from '../experience/Experience';
import Education from '../education/Education';
import Project from '../projects/Project';
import Skills from '../../skills/Skills';
import Others from '../others/Others';
import Comments from '../comments/Comments';
import Contact from '../contact/Contact';



const theme = createTheme({
  palette: {
    primary: {
      light: '#99D5BF',
      main: '#fafafa',
      dark:'#579981',
      contrastText: '#fff',
      white: '#C7E6C9',
      card: alpha('#80deea', 0.4)
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    tertiary: {
      light: '#33eb91',
      main: '#00e676',
      dark: '#00a152',
      contrastText: '#000',
    },
    github_white: {
      main: '#fafafa',
    },
    linkedin_blue:{
      main:'#007AB6',
    },
    gmail_red:{
      main: '#EA4335'
    },
    whatsapp_green:{
      main: '#25D366'
    },
    phone_blue:{
      main: '#41BCF7'
    },
    location_gray:{
      main: '#afaeb1'
    },
    love_red:{
      main:'#BB001B'
    },
  },
});


function App() {

  return (
     <Paper className='home-paper' elevation={3} > 
      <ThemeProvider theme={theme}>
        <Home/>
        <About />
        <Experience />
        <Project  />
        <Education />
        <Skills />
        <Others />
        <Comments />
        <Contact/>
      </ThemeProvider>
    
    </Paper>
   
  );
}

export default App;
