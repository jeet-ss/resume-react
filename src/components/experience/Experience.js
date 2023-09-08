import { Paper, Grid, Stack, Typography, Chip, Divider,  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState, useEffect }  from 'react'
import { Timeline, TimelineItem, TimelineContent, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, timelineContentClasses} from '@mui/lab';
import { SdRounded, TextIncrease } from '@mui/icons-material';

const listData = [
    {   id: "1",
        label: "Job Position A",
        date: "01.01.2023 - 02.02.2024",
        content:"Company A", 
        description: "content a content a content a content a content a",
        tags: [ "React", "Material"],
    },
    {   
        id:"2",
        label: "Job Position B",
        date: "01.01.2023 - 02.02.2024",
        content: "Company B", 
        description:"content a content a content a content a content a",
        tags: [ "Java", "Selenium"],
    },
    {   
        id:"2",
        label: "Job Position C",
        date: "01.01.2023 - 02.02.2024",
        content: "Company B", 
        description: "content c content c content c content c content c",
        tags: [ "Pytorch", "Python"],
    },{   
        id:"2",
        label: "Job Position D",
        date: "01.01.2023 - 02.02.2024",
        content: "Company D", 
        description: "content d content d content d content d content d",
        tags: [ "C++", "Matlab"],
    }
]

function Experience() {

    const theme = useTheme();
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
      }, []); 
  return (
    <Grid  container sx={{  
        //  height: 350,  
        bgcolor: `${theme.palette.primary.light}`, 
        //color: `${theme.palette.primary.contrastText}`, 
        overflow: 'hidden',
        
        
        }} direction="row" alignContent="center" justifyContent="center" spacing={{ xs: 2, md: 3 }} padding={4} >

        <Grid item>
            <Stack direction="column" alignContent="center" justifyContent="center" >
                <Typography variant="h3" sx={{ textAlign: 'center' , color: `${theme.palette.primary.contrastText}`}} > Work Experience</Typography>
                <Divider variant="middle" orientation="horizontal" />
            <Timeline position="alternate" >
                { listData.map((itm, idx) => 
                <TimelineItem key={idx} >
                <TimelineOppositeContent sx={{ py:6}} >
                    <Typography variant="subtitle1" >
                        {itm.date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" variant="outlined"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >
                    <Typography variant='h5'>
                        {itm.label}
                    </Typography>
                    <Typography variant='h6'>{itm.content}</Typography>                    
                    <Typography variant='body1'>
                        {itm.description}
                    </Typography>
                    <Stack direction="row" justifyContent={ idx%2===0?"flex-start":"flex-end"} >
                        { itm.tags.map((chipItem, idn) => 
                            <Chip label={chipItem} key={idn} />
                        )}
                    </Stack>
                </TimelineContent>                  
            </TimelineItem>
                )}
            </Timeline>
            </Stack>
        </Grid>
        {/* <Grid item>
            <Divider orientation={ isDesktop?"vertical":"horizontal"}  />
        </Grid>
        <Grid item>
            <Timeline position="alternate" >
                { listData.map((itm, idx) => 
                <TimelineItem key={idx}>
                <TimelineOppositeContent sx={{ py:6}} >
                    <Typography variant="subtitle2" >
                        {itm.date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" variant="outlined"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent >
                    <Typography variant='h6'>
                        {itm.label}
                    </Typography>
                    <Typography variant='body1'>
                        {itm.description}
                    </Typography>
                    <Stack direction="row" justifyContent={ idx%2===0?"flex-start":"flex-end"} >
                        { itm.tags.map((chipItem, idn) => 
                            <Chip label={chipItem} key={idn}/>
                        )}
                    </Stack>
                </TimelineContent>                  
            </TimelineItem>
                )}
            </Timeline>
        </Grid> */}
    </Grid>
  )
}

export default Experience