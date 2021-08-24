import React,{useContext} from 'react'
import {FaCloudRain,FaCloud} from "react-icons/fa"
import {AiOutlineCloud} from "react-icons/ai"
import {WiDayCloudy} from "react-icons/wi"
import { myApiData } from '../App';

const ShowNext = () => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const {datahook} = useContext(myApiData);
    
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayName1 = days[((new Date().getDay()+1))%7];
    var dayName2 = days[((new Date().getDay()+2))%7];
    var dayName3 = days[((new Date().getDay()+3))%7];
    var dayName4 = days[((new Date().getDay()+4))%7];
    var dayName5 = days[((new Date().getDay()+5))%7];
    return (
        <div className="nextday-data">
        <section>
            <h3>{dayName1}</h3>
            {(() => {
           switch (datahook.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain/>;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>;
        }
      })()}
            <h3>{parseInt(datahook.list[4].main.temp)}°</h3>
        </section>
        <section >
            <h3>{dayName2}</h3>
            {(() => {
           switch (datahook.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain />;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>;
        }
      })()}
            <h3>{parseInt(datahook.list[12].main.temp)}°</h3>
        </section>
        <section>
            <h3>{dayName3}</h3>
            {(() => {
           switch (datahook.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain/>;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>;
        }
      })()}
            <h3>{parseInt(datahook.list[20].main.temp)}°</h3>
        </section>
        <section>
            <h3>{dayName4}</h3>
            {(() => {
           switch (datahook.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain/>;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>;
        }
      })()}
            <h3>{parseInt(datahook.list[28].main.temp)}°</h3>
        </section>
        <section>
            <h3>{dayName5}</h3>
            {(() => {
           switch (datahook.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain/>;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>;
        }
      })()}
            <h3>{parseInt(datahook.list[36].main.temp)}°</h3>
        </section>
        </div>
    )
}
export default ShowNext;
