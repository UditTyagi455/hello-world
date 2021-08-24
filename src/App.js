import React,{useState,useEffect, createContext} from 'react'
import Axios from 'axios';
import Mydata from "./component/Mydata"
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

const myApiData = createContext();

const App = () => {

    const [value,setValue]= useState('');
    const [query,setQuery] =useState('muzaffarnagar')
    const [datahook,setDatahook] =useState(null)

    const fetchData = async () =>{
        try{
        const {data} =await Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=3aaa8d49118b513773199d96afa397f1&units=metric`)
        console.log(data);
        setDatahook(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect( ()=>{
        fetchData();
  },[query]);
  
  const handleChange = (e) =>{
          setValue(e.target.value)
  }
  const handleSubmit = (e) =>{
        e.preventDefault();
        if(value=== ''){
           return console.log("please enter a value!..")
        }
        setQuery(value);
        setValue('');
  }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form_class">
                <input type="text" placeholder="Enter city" value={value} onChange={handleChange}/>
                <button>Search</button>
            </form>
            <div>
                {datahook ? <myApiData.Provider value={{datahook}}> <Mydata /></myApiData.Provider> : ""}
            </div>
        </div>
    )
}

export default App;
export {myApiData}
