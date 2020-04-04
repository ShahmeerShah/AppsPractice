import React,{useState,useEffect} from 'react';


const SearchBar = ({setTerm}) => {

    const [val,setVal] = useState('');

    const formHandler=(e)=>{
        e.preventDefault();
        setTerm({term: val});
    }

    
    return (
        <div style={{margin:"60px auto", width:"950px", height: "30px"}}>
            <form onSubmit={formHandler} style={{display:"flex"}}>
            <input type="text" onChange={(e)=>setVal(e.target.value)} style={{width: "700px", height: "45px" , margin: "7px" ,padding:"10px", borderRadius: "10px"}}/>
            <input type="submit" value="Search" style={{width: "200px",backgroundColor:'red', color: "white", fontSize:'30px'  ,height: "50px" , borderRadius: "10px" , fontWeight: "bold"}}/>
            </form>
            <br/>
            
        </div>
    )
}

export default SearchBar;