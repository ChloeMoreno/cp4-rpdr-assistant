import { useState, useEffect } from 'react'
import axios from 'axios'
import Queens from '../Queens'

function EliminatedList() {
      const [queenInfo, setQueenInfo] = useState([])

useEffect(() => {
    axios
    .get('http://localhost:5000/eliminated')
    .then((res)=> 
    setQueenInfo(res.data))
  
  },[])
  console.log(queenInfo)

  return (
    <div className="page-container">
    <div className="queen-container">
    {queenInfo.map((queen)=> <Queens queenData={queen} key={queen.id}/>)}    
    </div>
    </div>

  )
  }
export default EliminatedList;