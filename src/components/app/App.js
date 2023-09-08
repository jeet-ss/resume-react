import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, } from '@mui/material';
//import { orange } from '@mui/material/colors';


import Home from '../home/Home';
import About from '../about/About';
import Experience from '../experience/Experience';
import Project from '../projects/Project';
import Skills from '../../skills/Skills';
import Comments from '../comments/Comments';
import Contact from '../contact/Contact';



const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
      white: '#fafafa',
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
    }
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
        <Skills />
        <Comments />
        <Contact/>
      </ThemeProvider>
    
    </Paper>
   
  );
}

export default App;
