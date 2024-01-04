import { Avatar, Box, Card, CardContent, CardHeader, Collapse, Button, Grid, Icon, IconButton, Stack, Typography  } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import React from 'react'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import { red } from '@mui/material/colors';
import ShowMoreText from "react-show-more-text";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CloseIcon from '@mui/icons-material/Close';
import { Filter } from '@mui/icons-material';


const commentsList = [
    {
        id: 1,
        av:"MM",
        name: "Prof. Dr. Meinard Müller",
        designation: "AI labs",
        company: "INTERNATIONAL AUDIO LABORATORIES ERLANGEN",
        comment: "Jeet actively participated in my music processing lecture, pursued a research internship, and worked as a student assistant in my group at the International Audio Laboratories Erlangen. He possesses extensive, in-depth, and varied expertise in machine learning, effectively applying this knowledge in practical scenarios. Jeet showed strong motivation and displayed a high level of initiative and dedication. He consistently demonstrated impressive scientific understanding, along with an excellent ability to collaborate within a team."

    },
    {
        id: 2,
        av:"B",
        name: "prof B",
        designation: "AI labs",
        company: "Fau",
        comment: "Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum"

    },
    {
        id: 3,
        av:"C",
        name: "prof C",
        designation: "AI labs",
        company: "Fau",
        comment: "Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum"

    },
    {
        id: 4,
        av:"D",
        name: "prof D",
        designation: "AI labs",
        company: "Fau",
        comment: "Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum"

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
        comment: "Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum"

    }
]

const Comments = () => {
  const theme = useTheme(); 
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [expand, setExpand] = React.useState(false);
  const onClick = (itm_id)  => {
    // setExpand(!expand);
    activeIndex===itm_id ? setActiveIndex(0) : setActiveIndex(itm_id)
  };
  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
  }
  return (
    <Grid container   sx={{ 
        bgcolor: `${theme.palette.primary.white}`,
        //textAlign: 'center',
        //overflowY: 'hidden',
        //overflow: 'auto',
        //minWidth: 0,
        }}
         direction="column" 
        //  alignItems="center" justifyContent="flex-start"  
         padding={3} spacing={3}>
        {/* <Grid item>
          <Stack direction="column">
            <Typography variant='h3'>My Projects</Typography>
          </Stack>
          
        </Grid> */}
        
        {/* <Grid item container direction="row" sx={{ overflow:'scroll' }}  rowSpacing={1} columnSpacing={3}  padding={2} alignItems="center" justifyContent="space-between"> */}
        
        {activeIndex === 0 ? <></> :
        // <Box sx = {{alignItems:"center" , justifyContent:"center", paddingX:50}} >
            commentsList.filter(ele => ele.id === activeIndex).map(ele => (
                <Grid sx={{overflow:"auto"}} item container alignItems="center" justifyContent="center" >
                <Grid item>
                {/* <Collapse in={true}> */}
                {(<Card sx={{ minWidth:485,maxWidth:850, bgcolor: alpha(`${theme.palette.primary.card}`, 0.3)}}>
                 <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}>
                        {ele.av}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => setActiveIndex(0)}>
                        <CloseIcon />
                    </IconButton>
                }
                title={ele.name} subheader={ele.company} 
                />
                <CardContent>
                    <Stack alignItems="center" direction="column">
                        <FormatQuoteRoundedIcon />
                        {ele.comment}
                        <FormatQuoteRoundedIcon />
                    </Stack>
                </CardContent>
                </Card>)}
                {/* </Collapse> */}
                </Grid></Grid>
            ))
            // </Box>
        }
        
        < Grid item container sx={{overflow: 'auto',
        //minWidth: 0,
        }} direction="row" alignItems="center" justifyContent="center" >
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
          {commentsList.filter(ele => ele.id !== activeIndex).map((itm, idx)=>
              <Card sx={{ minWidth:300,maxWidth:450,overflow:'hidden',display:'block',bgcolor: `${theme.palette.primary.card}`}} orientation="horizontal" key={idx} >
                <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}>
                        {itm.av}
                    </Avatar>
                }
                title={itm.name} subheader={itm.company} />
                <CardContent>
                    <Stack alignItems="center" direction="column">
                        <FormatQuoteRoundedIcon />
                       
                        {activeIndex===itm.id?<></>:
                        <Typography variant='body1' sx={{ color: `${theme.palette.text.primary}` }} >
                            {/* {truncateString(itm.comment, 100) } */}
                            <ShowMoreText
                            lines={3}
                            more={<IconButton>
                                <Typography variant='body2' sx={{ color: `${theme.palette.text.secondary}` }} >
                                    Show More
                                </Typography>
                                </IconButton>}
                            // less={<ExpandLessIcon />}
                            onClick={() => setActiveIndex(itm.id)}
                            expanded={false}
                            expandByClick = {false}
                            // width={30}
                        >
                            {itm.comment}
                        </ShowMoreText>
                        </Typography>
                        }                       
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

export default Comments;