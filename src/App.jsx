import { useState, useEffect } from 'react'
import Time from './Time'
import './App.css'
function App() {
  const [data, setData] = useState([])
  const [year, setYear] = useState('')
  const [event, setEvent] = useState('')
  useEffect(()=>{
    fetch("http://localhost:3001/events")
    .then((response) => {
      console.log(response) 
      return response.json()
    })
    .then((jsonData) =>setData(jsonData))
  },[])

  const handleClick = () => {
    fetch("http://localhost:3001/events",{
      method:"POST",
      body:JSON.stringify({year,event})
    })
    let newObj = {}
    newObj.year = year
    newObj.event = event
    setData([...data, newObj])
    setYear('')
    setEvent('')

  }
  return (
    <div>
      <h1>Welcome to Neha's Time Line </h1>
      <br />
      {data.map(event => {
        return (<Time key={event.year} year={event.year} event={event.event} />)
      })}
      <label htmlFor="Year">  Year</label>
      <input value={year} type='number' placeholder='Enter year' onChange={e => setYear(e.target.value)} />
      <br /> 
      <br />
      <label htmlFor="Event">Event</label>
      <input value={event} type='text'  placeholder='Enter event' onChange={e => setEvent(e.target.value)} />
      <button onClick={handleClick}>save</button>
    </div>
  )
}

export default App