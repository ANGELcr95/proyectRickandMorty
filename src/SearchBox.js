/* eslint-disable */
import './SearchBox.css';
import { useState } from "react";

const SearchBox= ({location} ) => {
    const[value, setValue] = useState('')

  return (
    <div className='Search-location'>
        <input placeholder="Location" onKeyDown={(e)=>{
            location(value)
        }} onChange = {(e)=>{
            setValue(e.target.value)
        }}>
        </input>
        <button  onClick={() =>{
            location(value)
        }}>Search</button>
    </div>
  )
}

export default SearchBox;
