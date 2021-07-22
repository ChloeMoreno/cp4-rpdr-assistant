import {useState} from 'react'

function Searchbox() {
  const [searchValue, setSearchValue] = useState('')
  const handleChange = (input) => {
    setSearchValue(input)
  }
  console.log(searchValue)

  return (
    <div>
       <input 
            placeholder="search a queen..."
            type= "text"
            onChange={(e)=>handleChange(e.target.value)}/>
    </div>
  )
}

export default Searchbox
