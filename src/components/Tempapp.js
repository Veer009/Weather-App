import React, {useEffect, useState} from 'react';
import "./css/style.css";
import { FaStreetView } from "react-icons/fa";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Lucknow");

    useEffect(()=>{
        const fetchApi =async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3fe3a93a1acadf29f2b5bfbdfaba5151`
            const response = await fetch(url);
           // console.log(response);
           const resJson = await response.json();
           setCity(resJson.main);
        }
        
        
        
        fetchApi();
    }, [search])

  return (
    <>
   
    <div className='box'>
        <div className="inputData">
            <input 
            type="search" 
            value={search}
            className="inputFeild" 
            onChange= {(event)=>{
                setSearch(event.target.value)
            }}/>
        </div>
    
    {!city ? (
        <p >No Data Found.</p>
    ):(
        <div>
        <div className="info">
        <h2 className='location'>
        
        <FaStreetView  className='street-icon'/>{search}
        </h2>
        <h1 className="temp">
        {city.temp}°Cel
        </h1>
        <h3 className="tempmin_max">Min : {city.temp}°Cel | Max : {city.temp}°Cel</h3>
    </div>
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
        </div>
    )}

  
    </div>
   
    </>
  )
}

export default Tempapp ;
