import React from 'react';
import {Grid} from '@material-ui/core';
import { VideoItem } from '.';

const VideoList = ({videos, onVideoSelect}) => {

    const listOfVideos = videos.map((video,index)=> <VideoItem onVideoSelect={onVideoSelect} key={index} video={video} />  )

    return (
        <>
            <Grid container spacing={10} >
                {listOfVideos}

            </Grid>
        </>
    )
}

export default VideoList;