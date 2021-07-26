import axios from 'axios'
import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams} from 'react-router-dom'

function GetOneQueen() {

  const [oneQueenInfo, setOneQueenInfo] = useState([])
  let data = useParams()

  const fetchData = ()=>{
  axios
  .get(`http://localhost:5000/queens/name/${data.queenName}`)
  .then((res)=>setOneQueenInfo(res.data))
}
  useEffect(()=> {
    fetchData()
  },[])
 
  return (
    <div className="page-container">
      <div className="queen-card">
        <img src={oneQueenInfo.picture} alt='' className="queen-pic" />
        <div className="card-container">
        <h4>{oneQueenInfo.dragname}</h4>
        <p>{oneQueenInfo.original_season}</p>
        {oneQueenInfo.is_favorite ?  <FavoriteIcon color="secondary"/>  :  <FavoriteBorderIcon color="secondary"/>   }
        </div>
      </div>
    </div>
  )
}

export default GetOneQueen
