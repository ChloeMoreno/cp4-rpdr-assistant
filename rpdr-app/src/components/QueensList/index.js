import {useState, useEffect } from 'react'
import axios from 'axios'
import Queens from '../Queens'
import './styles.css'
import Searchbox from "../SearchBox"

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
    <div className="page-container">
       <Searchbox />
    <div className="queen-container">
    {queenInfo.map((queen)=> <Queens queenData={queen} key={queen.id}/>)}    
    </div>
    </div>
  )
}

export default QueensList
