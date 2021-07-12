/* eslint-disable */
// import './ResidentContainer.css';
import ResidentInfo from "./ResidentInfo";
import { useState, useEffect } from "react";

const ResidentContainer = ({residentUrl}) => {
    
    const[resident, setResident] = useState(null)
    const[classNameStatus, setClassNameStatus] = useState(null) 

    useEffect(() => {

        if(residentUrl){
            const fetchUbication = async () => {
            const resident = await fetch(residentUrl).then(respon => respon.json())
            setResident(resident)
            if(resident.status){
                if( resident.status == "Alive") {
                    setClassNameStatus("Alive")
                } else {
                    setClassNameStatus("Dead")
                }
            }
            }
            fetchUbication()
        }
    },[residentUrl])

    if(!resident){
        return null
    }
    
    return (
        <ResidentInfo name={resident.name} img={resident.image} status={resident.status} place={resident.location.name} episode={resident.episode.length} key={resident.id} classNameStatus={classNameStatus}/>
    )
}

export default ResidentContainer