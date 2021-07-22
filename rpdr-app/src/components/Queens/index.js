import './styles.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Queens(props){
  const { queenData } = props 
  return (
    <div className="queen-card">
      <img src={queenData.picture} alt='' className="queen-pic" />
      <div className="card-container">
      <h4>{queenData.dragname}</h4>
      <p>{queenData.original_season}</p>
      {queenData.is_favorite ?  <FavoriteIcon color="secondary"/>  :  <FavoriteBorderIcon color="secondary"/>   }
      </div>
    </div>
  )
}

export default Queens
