function Queens(props){
  const { queenData } = props 
  return (
    <div>
      <p>{queenData.dragname}</p>
      <img src={queenData.picture} alt='' />
      <p>{queenData.original_season}</p>
    </div>
  )
}

export default Queens
