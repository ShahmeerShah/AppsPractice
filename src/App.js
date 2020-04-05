import React, {useEffect,useState } from 'react';
// import './App.css';
import './Gallery.css';
const App = () =>{
  const [state,setState] = useState({images: []});
  const [newstate,setNewState] = useState({currentImgId: null });


  useEffect(()=>{
    fetch("https://picsum.photos/list").then(res => res.json()).then((data)=>{setState({images: data}); console.log(data)});
    console.log(state.images);
  },[])


  return(
    <div>
      <h1 className="hh">Picso</h1>
      {newstate.currentImgId != null && <Selected image={newstate.currentImgId} setNewState={setNewState} />}
      <ul>
      {state.images.map((imag)=>{return(<img key={imag.id}src={`https://i.picsum.photos/id/${imag.id}/200/200.jpg`} style={{margin: '5px'}} onClick={()=>setNewState({currentImgId:imag.id})}/>)})}
      </ul>


      
    </div>
  )
}

const selectedStyle = {
  position: 'fixed',
  backgroundColor: 'lightgray',
  width: "100vw",
  height: "100vh",
  opacity: "1",
  margin: '0px'
}


const Selected = ({image,setNewState}) =>{
  return(
    
    <div style={selectedStyle}>
     

      <img className="imgg" src={`https://i.picsum.photos/id/${image}/300/300.jpg`} onClick={()=>setNewState({currentImgId: null})}/>
     
    </div>
  )

}

export default App;


