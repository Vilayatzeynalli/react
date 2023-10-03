import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState([]);
  const [isRequest, setRequest] = useState(false);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
      setState(res.data)
    
      // res.data.map((obj:any)=>{
      //   console.log(obj.userId);
      // });
  
    }
)
  }, []);
  // axios.get(url[, config])
  return <div className="App">{state && state.map((obj:any)=>{
    return <h1>{obj.title}</h1>
  })}</div>;
}

export default App;
