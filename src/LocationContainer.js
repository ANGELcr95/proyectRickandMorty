/* eslint-disable */
import './LocationContainer.css';
import { useState, useEffect } from "react";
import LocationInfo from "./LocationInfo";
import ResidentContainer from "./ResidentContainer";
import Pagination from "./Pagination";

const LocationContainer= ({ubicationUrl}) => {

    const[ubication, setUbication] = useState([])
    const[residents, setResidents] = useState([]) 
    const[currentPage, setCurrentPage] = useState(1) 
    const[postsPerPage] = useState(9) 
    const[loading, setLoading] = useState(true)

    useEffect(() => {
      if(ubicationUrl){
        const fetchUbication = async () => {
          const dataUbication = await fetch(ubicationUrl).then(respon => respon.json())
          setUbication(dataUbication)
          setResidents(dataUbication.residents)
        }
        fetchUbication()
      }
    },[ubicationUrl])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = residents.slice(indexOfFirstPost, indexOfLastPost)
    const listResidentSlice = currentPosts.map(resident => <ResidentContainer key={resident} residentUrl={resident}/>)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if(loading){
    setTimeout(() => {
      setLoading(false)
    },1000);
    return <h2 className="Loading">Loading...</h2>
  }

  return (
    <div>
      <LocationInfo name={ubication.name} type={ubication.type} dimension={ubication.dimension}/>
      <div className="Pagination">
        <Pagination postsPerPage={postsPerPage} totalPosts={residents.length} paginate={paginate}/>
      </div>
      <div className="ListResidents">
        {listResidentSlice}
      </div>
    </div>
  )
}

export default LocationContainer;
