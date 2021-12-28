import React,{useEffect, useState} from 'react';
import './App.css';

function App() {

  const [data,setData] = useState(null);

  const [search, setSearch] = useState('');

  const handleChange=(e)=>{
    // console.log(e.target.value);
    setSearch(e.target.value);
  }

  useEffect(()=>{
    let result = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=efba5ae56b24058ab111b44c704e3da7`);

    result.then((response)=>{
        return response.json();
    }).then((data)=>{
          setData(data);
          console.log(data);
    })
  },[search])

  // console.log(data.main.temp);

  console.log(data);

  return (
    <div className="outerbox">
      <input type="text" placeholder="Search city worlwide" value={search} onChange={handleChange} />
      <div className="temperature">
          { data?.main?.temp?
            <>
              <span>Temperature:</span>
              {data.main.temp}
              <span>&deg;C</span>
              <div><span>Humidity:</span>{data.main.humidity}%</div>
              <div><span>Wind-Speed:</span>{data.wind.speed}Km/h</div>
              <div><span>Wind-Direction:</span>{data.wind.deg}<span>&#8599;</span></div>
            </>
            :
            null
          }
      </div>
      {/* <div>{data?data.main:null}</div> */}
    </div>
  );
}

export default App;
