import React,{useContext} from 'react';
import ShowNext from "./ShowNext"
import { myApiData } from '../App';

const Mydata = ({props}) => {
    const {datahook} =useContext(myApiData);
    // console.log(datahook);
    return (
        <>
            <div className="bg-div">
                <div className="anouther-div">
                   <h1>{datahook.list[0].weather[0].main}</h1>
                   <h2>{datahook.city.name},{datahook.city.country}</h2>
                   <h3 className="main-tem">{parseInt(datahook.list[0].main.temp)}°</h3>
               </div>
               <div className="div-3">
                  <ShowNext />
               </div>
            </div>
            
        </>
    )
}

export default Mydata
