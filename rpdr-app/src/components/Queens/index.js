import './styles.css'

function Queens(props){
  const { queenData } = props 
  return (
    <div className="queen-card">
      <img src={queenData.picture} alt='' className="queen-pic" />
      <div className="card-container">
      <h4>{queenData.dragname}</h4>
      <p>{queenData.original_season}</p>
      </div>
    </div>
  )
}

export default Queens
