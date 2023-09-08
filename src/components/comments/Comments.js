import { Avatar, Box, Card, CardContent, CardHeader, Grid, Stack, Typography  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import { red } from '@mui/material/colors';

const commentsList = [
    {
        id: 1,
        av:"A",
        name: "prof A",
        designation: "AI labs",
        company: "Fau",
        comment: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"

    },
    {
        id: 2,
        av:"B",
        name: "prof B",
        designation: "AI labs",
        company: "Fau",
        comment: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"

    },
    {
        id: 3,
        av:"C",
        name: "prof C",
        designation: "AI labs",
        company: "Fau",
        comment: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"

    },
    {
        id: 4,
        av:"D",
        name: "prof D",
        designation: "AI labs",
        company: "Fau",
        comment: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"

    },
    {
        id: 5,
        av:"C",
        name: "prof C",
        designation: "AI labs",
        company: "Fau",
        comment: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"

    },
    {
        id: 6,
        av:"D",
        name: "prof D",
        designation: "AI labs",
        company: "Fau",
        comment: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"

    }
]

const Comments = () => {
  const theme = useTheme(); 
  return (
    <Grid container   sx={{ 
        bgcolor: `${theme.palette.primary.white}`,
        //textAlign: 'center',
        //overflowY: 'hidden',
        overflow: 'auto',
        //minWidth: 0,
        }} direction="row" alignItems="center" justifyContent="flex-start"  padding={3}>
        {/* <Grid item>
          <Stack direction="column">
            <Typography variant='h3'>My Projects</Typography>
          </Stack>
          
        </Grid> */}
        
        {/* <Grid item container direction="row" sx={{ overflow:'scroll' }}  rowSpacing={1} columnSpacing={3}  padding={2} alignItems="center" justifyContent="space-between"> */}
        < Grid item  >
            <Box sx={{ display: 'flex',
                gap: 1,
                py: 1,overflow: 'auto',
                minWidth: 400,
                scrollSnapType: 'x mandatory',
                '& > *': {
                scrollSnapAlign: 'center',
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}>
          {commentsList.map((itm, idx)=>
              <Card sx={{ minWidth:285,maxWidth:450  }} orientation="horizontal" key={idx} >
                <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}>
                        {itm.av}
                    </Avatar>
                }
                title={itm.name} subheader={itm.designation} />
                <CardContent>
                    <Stack alignItems="center" direction="column">
                        <FormatQuoteRoundedIcon />
                        <Typography variant='body1'  >{itm.comment}</Typography>
                        <FormatQuoteRoundedIcon />
                    </Stack>
                  
                </CardContent>
              </Card>
          )}
          </Box>
        </Grid>
    </Grid>
  )
}

export default Comments