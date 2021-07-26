import axios from 'axios'
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import "./styles.css"
import SearchIcon from '@material-ui/icons/Search';

function Searchbox() {
  const history = useHistory()
  const [searchValue, setSearchValue] = useState('')
  const handleChange = (input) => {
    setSearchValue(input)
  }
  const handleSearch = (e, searchValue) => {
    e.preventDefault()
    axios
    .get(`http://localhost:5000/queens/name/${searchValue}`)
    .then((res)=> history.push(`queens/name/${res.data.dragname}`))
}

  return (
    <div className="search-container">
       <input 
            placeholder="search a queen..."
            type= "text"
            className="input-styled"
            onChange={(e)=>handleChange(e.target.value)}/>
            <div className="button-styled">
             <SearchIcon onClick={(e)=>handleSearch(e,searchValue)}  />
            </div>
    </div>
  )
}

export default Searchbox
