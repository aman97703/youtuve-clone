import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core'

const VideoItem = ({video,onVideoSelect}) => {
    return (
        <>
            <Paper style={{display:'flex', alignItems:'center', cursor:'pointer'}} onClick={()=>{
                onVideoSelect(video)
            }} >
                <img style={{marginRight:'20px'}} src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                <Typography varient="subtitle1" >{video.snippet.title}</Typography>
            </Paper>
        </>
    )
}

export default VideoItem
