import {  Grid, IconButton, Stack, Typography, SvgIcon,  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react'


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const Contact=()=> {
  const theme = useTheme(); 
  const email = 'jeet.sensarma@gmail.com'
  const body = 'Hello Worjld'
  const subject = 'Contact me'
  return (
    <Grid  container sx={{ 
      //height: 350,  
      bgcolor: `${theme.palette.primary.dark}`, 
      color: `${theme.palette.primary.contrastText}`, 
      //textAlign: 'center',
      overflow: 'hidden',
      
      }} direction="column" alignContent="center" justifyContent="center" padding={2} >
        <Grid item container direction="rows" alignContent="center" justifyContent="center" spacing={3} padding={2}>
          <Grid item>          
            <IconButton href='https://www.linkedin.com/in/jeet-sensarma/' >
              <LinkedInIcon color='linkedin_blue' fontSize="large"  />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href='https://github.com/jeet-ss' >
              <GitHubIcon color='github_white' fontSize="large"  />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`} >
              <EmailIcon  color='gmail_red' fontSize="large" />
            </IconButton >
          </Grid>
          <Grid item>
            <IconButton href={`https://wa.me/15750650812`}>
              <WhatsAppIcon color='whatsapp_green' fontSize="large"  />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href='https://twitter.com/sensarma5_jeet?t=U4Nqh80Z_lXb1fofUwg7hQ&s=09'>
              <SvgIcon fontSize="large" color='github_white'>
              <svg version="1.1" id="svg5" xmlnsSvg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1668.56 1221.19"
                xmlSpace="preserve">
                <g id="layer1" transform="translate(52.390088,-25.058597)">
                  <path id="path1009" d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
                    h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z" fill='#fafafa'/>
                </g>
            </svg>
              </SvgIcon>
            </IconButton>
          </Grid>
          
        </Grid>
        <Grid item>
            <Stack direction="row" alignItems="center" justifyContent="center"   >
            <IconButton href={`tel:+4915750650812`} >
              <PhoneIcon color='phone_blue' fontSize="large"  />
            </IconButton>
            <Typography sx={{ textAlign:'center', textJustify:'center', }}>+49-15750650812</Typography>
            </Stack>
        </Grid>
        <Grid item>
          <Stack direction="row" justifyContent="center" alignItems="center" >
            <IconButton href='https://goo.gl/maps/yrZFEj4iVpCAvrAj8' >
              <SvgIcon fontSize="large"  >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2020 1516">
                {/* <path d="M1023 1638l82.8-34.4c-4.6-11.6-18.2-19.6-34.4-19.6-20.7-.1-49.4 18.2-48.4 54m97.2 33.3l31.6 21c-10.2 15.1-34.7 41.1-77.2 41.1-52.6 0-90.6-40.7-90.6-92.6 0-55.1 38.3-92.6 86.1-92.6 43.9 1.5 71.2 29.8 83.5 69.4l-124 51.2c9.5 18.6 24.2 28.1 44.9 28.1 20.6 0 35-10.2 45.5-25.6m-201 56.5h40.7v-272H919zm-66.4-86.7c0-32.6-21.8-56.5-49.5-56.5-28 0-51.6 23.9-51.6 56.5 0 32.3 23.5 55.8 51.6 55.8 27.8 0 49.5-23.5 49.5-55.8zm35.8-87.3v166c0 68.4-40.3 96.5-88 96.5-44.9 0-71.9-30.2-82.1-54.7l35.4-14.7c6.3 15.1 21.8 33 46.7 33 45.5-5.17 49.5-34.6 49.5-67.7h-1.5c-9.1 11.2-26.7 21.1-48.8 21.1-46.3 0-88.8-40.3-88.8-92.3 0-52.3 42.4-93 88.8-93 22.1 0 39.7 9.8 48.8 20.7h1.4v-15.1c0-.1 38.6-.1 38.6-.1zm-444 87c0-33.3-23.8-56.1-51.3-56.1-27.6 0-51.3 22.8-51.3 56.1 0 33 23.8 56.1 51.3 56.1s51.3-23.2 51.3-56.1m40 0c0 53.3-41 92.6-91.3 92.6s-91.3-39.3-91.3-92.6c0-53.7 41-92.6 91.3-92.6s91.3 38.9 91.3 92.6m165 0c0-33.3-23.8-56.1-51.3-56.1-27.6 0-51.3 22.8-51.3 56.1 0 33 23.8 56.1 51.3 56.1s51.3-23.2 51.3-56.1m40 0c0 53.3-41 92.6-91.3 92.6s-91.3-39.3-91.3-92.6c0-53.7 41-92.6 91.3-92.6s91.3 38.9 91.3 92.6m-544 92.6c-79.2 0-146-64.6-146-144 0-79.3 66.7-144 146-144 43.9 0 75.1 17.2 98.6 39.7l-27.7 27.7c-16.8-15.8-39.6-28.1-70.9-28.1-57.9 0-103 46.7-103 104 0 57.9 45.3 104 103 104 37.5 0 58.9-15.1 72.6-28.8 11.2-11.2 18.6-27.4 21.4-49.5h-94v-39.3h132c1.4 7 2.1 15.4 2.1 24.5 0 29.5-8.1 66-34 91.9-25.2 26.5-57.5 40.6-100 40.6" fill="#5f6368" fill-rule="evenodd"/> */}
                {/* <path d="M1249.14 1725.74v-241.806h31.228l83.978 147.278h1.266l83.978-147.278h31.228v241.806H1449.6l1.266-183.992h-1.266l-75.538 132.508h-18.146l-75.538-132.508h-1.266c2.304 61.2 1.266 122.802 1.266 183.992zm329.16 4.22c-17.724 0-32.072-5.064-43.888-15.192s-17.724-23.632-17.724-40.1c0-18.146 7.174-32.072 21.1-42.2s31.228-15.192 51.484-15.192c18.146 0 33.338 3.376 44.732 10.128-.303-35.1-24.56-44.732-43.466-44.732-17.85.848-33.338 8.313-39.668 24.054l-28.274-12.238c3.798-9.706 11.394-19 22.788-27.43s26.164-12.66 44.732-12.66c21.1 0 38.824 6.33 52.75 18.568s21.1 29.962 21.1 52.328v100.014h-29.54v-22.788c-13.8 17.302-32.452 27.05-56.126 27.43zm55.704-76.804c-18.188-13.842-56.126-15.572-73.85-1.266-13.926 13.504-15.403 31.608-.844 42.2 35.195 22.577 75.96-12.576 74.694-40.934zm151.076 76.804c-12.66 0-24.054-2.532-33.76-8.018s-17.302-12.238-22.366-20.256h-1.688l1.266 22.788v73.006h-30.806v-238.43h29.54v22.788h1.266c5.064-8.018 12.238-14.77 22.366-20.256s21.522-8.018 33.76-8.018c21.522 0 39.668 8.44 55.282 25.32s23.2 37.98 23.2 62.878-7.596 45.998-23.2 62.878c-15.192 16.88-33.76 25.32-54.86 25.32zm-5.064-28.696c14.348 0 26.586-5.486 37.136-16.458s15.614-25.32 15.614-43.466-5.064-32.494-15.614-43.466-22.788-16.458-37.136-16.458c-14.77 0-27.008 5.486-37.136 16.036-10.128 10.972-15.192 25.32-15.192 43.466s5.064 32.916 15.192 43.466c10.128 11.816 22.366 16.88 37.136 16.88zm173.864 28.696c-18.568 0-33.76-4.642-45.576-13.504-12.238-8.862-20.678-20.256-26.586-33.76l27.852-11.394c8.862 20.678 23.632 31.228 44.732 31.228 9.706 0 17.724-2.1 23.632-6.33 6.33-4.22 9.284-9.706 9.284-16.88 0-10.972-7.596-18.146-22.788-21.944l-33.338-8.018c-10.55-2.532-20.678-8.018-29.962-15.192s-14.348-17.724-14.348-30.384c0-14.77 6.33-26.586 19.412-35.448 13.082-9.284 28.274-13.504 45.998-13.504 14.77 0 27.852 3.376 39.246 10.128s19.834 16.036 24.476 28.696l-27.008 10.972c-5.908-14.77-18.568-21.944-37.98-21.944-9.284 0-16.88 2.1-23.2 5.908s-9.284 8.862-9.284 15.614c0 9.284 7.174 16.036 21.944 19.412l32.916 7.596c15.614 3.798 27.008 9.706 34.604 18.568s10.972 18.568 10.972 29.54c0 14.77-5.908 27.43-18.146 37.136-11.816 8.44-27.43 13.504-46.842 13.504z" fill="#63666a"/> */}
                <path d="M831 909.9c37.9 47.4 76.5 107 96.7 143 24.6 46.8 34.8 78.4 53.1 135 10.7 31 20.9 40.4 42.3 40.4 23.4 0 34.1-15.8 42.3-40.4 17.1-53.1 30.3-93.5 51.2-132 80.6-152 212-260 286-408 0 0 48.7-90.4 48.7-217 0-118-48-200-48-200l-572 680z" fill="#34a853"/><path d="M637 631.9c46.1 105 134 197 194 278l318-377s-44.9 58.8-126 58.8c-90.4 0-164-72-164-163 0-62.6 37.3-106 37.3-106-234 34.8-221 91.5-260 309z" fill="#fbbc04"/>
                <path d="M1153 19.6c106 34.1 196 106 250 211l-254 303s37.3-43.6 37.3-106c0-92.9-78.4-163-163-163-80.3 0-126 58.1-126 58.1 19.5-44.4 221-288 256-303z" fill="#4285f4"/>
                <path d="M695 152.9c63.2-75.2 174-153 327-153 73.9 0 130 19.6 130 19.6l-255 303c-17.2-9.33-185-140-202-170z" fill="#1a73e8"/>
                <path d="M637 631.9s-41.7-82.8-41.7-202c0-113 44.2-212 100-276l202 170-260 308z" fill="#ea4335"/>
              </svg>
              </SvgIcon >
            </IconButton>
            <Typography >Nuremberg, Germany</Typography>
          </Stack>
        </Grid>
      </Grid>
  )
}


export default Contact