
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addAmounts, withDrows } from './features/counter/counterSlice';

function App() {
  const [addfand1, setaddfand1] = useState("")
  const [withdrow2, setwithDrow2] = useState("")

  let store = useSelector(state=>state);
  let dispatch = useDispatch();
  console.log(store)


  let addAmount = ()=>{
    
    console.log(addfand1)
    dispatch(addAmounts(addfand1));
  }
  let withDrow = ()=>{
    console.log(withdrow2)
    dispatch(withDrows(withdrow2))
  }
  return (
    <div className="App">
      <h1>Redux Toolkit Assignment</h1>
      <h1>Amount {store.value}</h1>
      <div>
        <input onChange={(e)=>{setaddfand1(e.target.value)}} type="text" placeholder='enter add amount'/>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{addAmount()}}>Add amount</button>
      </div>
      <br />
      
      <div>
        <input onChange={(e)=>{setwithDrow2(e.target.value)}} type="text" placeholder='enter Withdraw fund'/>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{withDrow()}}>Withdraw </button>
      </div>
      
    </div>
  );
}

export default App;
