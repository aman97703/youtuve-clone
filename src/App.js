import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetails, VideoList } from './components'

// class based components

class App extends React.Component {
    state = {
        videos : [],
        selecteVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('carryminati videos')
    }

    handleSubmit = async (searchTerms) => {
        const res = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAYUk_RKXrGFAqWMBRpDM8otRwE0h7o5uc',
                q : searchTerms
            }
        });
        // console.log(res.data.items);
        this.setState({videos : res.data.items, selecteVideo: res.data.items[0]});
    }
    onVideoSelect = (video) => {
        this.setState({selecteVideo: video})
    }
    render() {
        const {selecteVideo,videos} = this.state;
        return (
            <Grid justifyContent="center" container spacing={10}>
                <Grid item xs={12} >
                    <Grid container spacing={10} >
                        <Grid item xs={12} >
                            {/* search bar */}
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={7}>
                            {/* video */}
                            <VideoDetails video={selecteVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            {/* video list */}
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App
