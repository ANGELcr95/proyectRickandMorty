/* eslint-disable */
import './ResidentInfo.css'

const ResidentInfo = ({name, img, status, place, episode, classNameStatus}) => {

  return (
    <div className="Resident">
      <div className="TextResidentInfo">
        {img? <h3 className="Name">{name}</h3>: null}
        {img? <h3 className={classNameStatus}>{status}</h3>: null}
        {img? <h3>{place}</h3>: null}
        {img? <h3>Episodes:{episode}</h3>: null}
      </div>
      {img? <img src={img}></img>: null}
    </div>
  )
}
  
  export default ResidentInfo