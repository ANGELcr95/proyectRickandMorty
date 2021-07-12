/* eslint-disable */
import "./LocationInfo.css"

const LocationInfo = ({name, type, dimension}) => {
  
  return (
    <div className="LocationInfo">
      <h3>name:{name}</h3>
      <h3>type:{type}</h3>
      <h3>dimension:{dimension}</h3>
    </div>
  )
}

export default LocationInfo