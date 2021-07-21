import {useState, useEffect } from 'react'
import axios from 'axios'
import Queens from './Queens'

function QueensList() {
  const [queenInfo, setQueenInfo] = useState([])

useEffect(() => {
    axios
    .get('http://localhost:5000/queens')
    .then((res)=> 
    setQueenInfo(res.data))
  
  },[])
  console.log(queenInfo)

  return (
    <div>
    {queenInfo.map((queen)=> <Queens queenData={queen} />)}    
    </div>
  )
}

export default QueensList
