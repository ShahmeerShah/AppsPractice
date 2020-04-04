import React, {useState,useEffect} from 'react';

const VideoListItem = ({videosli,setVideos,videos}) => {
    const imageUrl = videosli.snippet.thumbnails.default.url;

    return (
    <li className="list-group-item" onClick={()=>{setVideos({...videos,selectedVideo:videosli})}}>
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>

            <div className="media-body">
    <div className="media-heading">{videosli.snippet.title}</div>
            </div>

        </div>

    </li>
    )
}

export default VideoListItem;