import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function QueenFavorite(props) {
  const {isFavorite, handleFavorite} = props

  return (
    <div>
    {isFavorite ?  <FavoriteIcon color="secondary" onClick={()=>handleFavorite(true)} />  :  <FavoriteBorderIcon color="secondary" onClick={()=>handleFavorite(false)} />   }

    </div>
  )
}

export default QueenFavorite
