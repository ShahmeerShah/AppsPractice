import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos,setVideos}) =>{
    // const videoitems = () => {
    //     return(

    //         )
    // }
    return (
        <div>
            {videos.videosdata.length}
            <ul>
            {/* {videoitems} */}
            {videos.videosdata.map(videosli =>{
                return(<VideoListItem setVideos={setVideos} videos={videos} videosli={videosli} key={videosli.etag}/>)
            })}
            </ul>
        </div>
    )
}

export default VideoList;

