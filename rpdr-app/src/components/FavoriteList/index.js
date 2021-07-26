import {useEffect, useState} from 'react'
import axios from 'axios'
import Queens from '../Queens'

function FavoriteList() {
  const [favInfo, setFavInfo] = useState([])

  useEffect(() => {
      axios
      .get('http://localhost:5000/favorites')
      .then((res)=> 
      setFavInfo(res.data))
    
    },[])
    console.log(favInfo)
  
    return (
      <div className="page-container">
      <div className="queen-container">
      {favInfo.map((queen)=> <Queens queenData={queen} key={queen.id}/>)}    
      </div>
      </div>
  
    )
}

export default FavoriteList
