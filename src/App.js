import React, {useEffect,useState,AsyncuseState} from 'react';
// import './App.css';
import SearchBar from './Components/Searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';

function App() {
  const [term,setTerm] = useState({term: ""});
  const [videos,setVideos] = useState({videosdata: [], selectedVideo: null})



  useEffect(()=>{
    YTSearch({key: API_KEY, term: term.term},(data)=>{
      setVideos({videosdata: data , selectedVideo: data[0]});
      console.log(data);
        
        
    });
  },[term])

const API_KEY = 'AIzaSyBUhwWD5KozTm0ZYVnFC0gUVAgN-I2s5Wo';

  return (
    <div className="App">
     
      <SearchBar setTerm={setTerm}/>
      <VideoDetail videos={videos.selectedVideo}/>
      <VideoList setVideos={setVideos} videos={videos} />
     
      
      {/* <VideoList videos={videos} /> */}
    </div>
  );
}

export default App;
