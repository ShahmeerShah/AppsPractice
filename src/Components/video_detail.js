import React, {useState,useEffect} from 'react';

const VideoDetail = ({videos}) => {
    if(!videos){ 
    return(<h1>...Loading</h1>);
    }
       
        const videoIdd = videos.id.videoId;
        const url = "https://www.youtube.com/embed/"+videoIdd;
        return (
            <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}>
                </iframe>
            </div>

            <div className="details">
                <div>{videos.snippet.title}</div>
                <div>{videos.snippet.description}</div>  
            </div>

        </div>
    )

}

export default VideoDetail;