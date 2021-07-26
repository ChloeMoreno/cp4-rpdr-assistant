import './styles.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import QueenFavorite from '../QueenFavorite';
function Queens(props){
  const { queenData } = props 
  const [isFavorite, setIsFavorite] = useState(queenData.isFavorite)

  const handleFavorite = (bool) => {
    setIsFavorite(!isFavorite)
    axios.put(`http://localhost:5000/queens/${queenData.id}`, {"is_favorite": !bool})
         
  }

    return (
      <div className="page-container">
      <div className="queen-card">
        <Link to={`queens/name/${queenData.dragname}`}>
         <img src={queenData.picture} alt='' className="queen-pic" />
        </Link>
        <div className="card-container">
        <h4>{queenData.dragname}</h4>
        <p>{queenData.original_season}</p>
        <QueenFavorite isFavorite={isFavorite} handleFavorite={handleFavorite}/>
        </div>
      </div>
      </div>
  )
}

export default Queens
