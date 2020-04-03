import React, { useState, useEffect } from 'react';
import './App.css';

function App() { 

  const [records,setRecords] = useState({recordsArray:[]});
  
  const [revenue,setRevenue] = useState({revNum:0});  


  return(
    

    <div className="App">
      <h1 className="ShopHead">Shop Manager</h1>
      <RevenueComp revenue={revenue} />
      <FormComp setRecords={setRecords} records={records} setRevenue={setRevenue} revenue={revenue} />
      <RecordsComp records={records}/>
      
    </div>
  )

}

const RevenueComp = ({revenue}) =>{

  return(
    <div className="revenue">
      <h2>Revenue :   </h2> <div><h4>PKR {revenue.revNum == 0 ? revenue.revNum : revenue.revNum.toFixed(2)} /-</h4></div>
    </div>
  )
}

const FormComp = ({setRecords,records,setRevenue,revenue}) =>{
  const [val,setVal] = useState({product: '',price: 0, category: ''});
let temp= null;



var tempNumber = 0;
useEffect(()=>{
  if(revenue.revNum != 0 ){
  var myInterval = setInterval(()=>{setRevenue({...revenue,revNum: (parseFloat(revenue.revNum)-1.10)})},10000)
  }
  tempNumber++;
  return ()=>clearInterval(myInterval)

},[revenue])

  const formHandler = (e) =>{

    

    e.preventDefault();
    
    setRevenue({...revenue,revNum: (parseFloat(revenue.revNum)+parseFloat(val.price))});

    temp = [[
      val.product,
      parseInt(val.price,10),
       val.category]]
      

    setRecords({...records, recordsArray: records.recordsArray.concat(temp)});
    console.log(records);

    // console.log(records.recordsArray)
    
  }


return(
  <div className="formComp">
    <form onSubmit={formHandler}>
      <h3 className="label">Product Name</h3>
      <input  required type="text" value={val.product}  onChange={(e)=>{setVal({...val,product : e.target.value})}}   />
      
      <h3 className="label">Product Price</h3>
      <input required type="text" value={val.price}  onChange={(e)=>{setVal({...val,price : e.target.value})}}  name="price" required/>
      
      <h3 className="label">Category</h3>
      <select required onChange={(e)=>{setVal({...val,category: e.target.value})}}  name="category" required>
      <option>Grocery</option>
      <option>Softwere</option>
      <option>Electrical</option>
      </select>
      <input className="submitt"type="submit" value="Submit"/>
    </form>
  </div>
)
}

const RecordsComp = ({records}) =>{
  
  const  mappy=()=>{
    return(
      <ul>
       
       {records.recordsArray.map((data)=>{
           return(
           <li className="listStyle">
             <p>Product Name: {data[0]}</p>
             <p>Price: Rs {data[1]} /-</p>
             <p>Category: {data[2]}</p>
           </li>
           )
          })}
      </ul>
        )}
  useEffect(()=>{
    console.log(records);
  },[records])


  return(
    <div className="records">
      <h1>Records</h1>
      {mappy()}
      
    </div>
  )
}


export default App;
