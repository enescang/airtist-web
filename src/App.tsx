import { Box, Grid2, Typography } from '@mui/material'
import './App.css'
import ResponsiveAppBar from './components/Header'
import video1 from './assets/video/video_1.mp4';
import ReactPlayer from 'react-player';

function App() {

  return (
    <>
      <ResponsiveAppBar>

      </ResponsiveAppBar>

      <Box sx={{ marginX: 4, marginTop: 4 }}>
        <Typography sx={{ fontSize: 56 }}>Generate your shorts in seconds with high quality</Typography>
        <Typography sx={{ fontSize: 28 }}>Ai powered short video generator</Typography>

        <Grid2 container sx={{}}>
          {
            [1,2,3,4].map(item => {
              return <>
                <Grid2 key={item} size={12 / 4}>
                  <Box sx={{ height: 240, background: 'red' }}>
                    <ReactPlayer
                    width={'100%'}
                    height={'100%'}
                    style={{
                      height: '100%',
                      width:'100%',
                      objectFit:'cover'
                    }}
                    url={video1}
                    controls={true}
                    />
                  </Box>
                </Grid2>
              </>
            })
          }
        </Grid2>
      </Box>
    </>
  )
}

export default App
