/* eslint-disable */
import './App.css';
import { useState, useEffect} from 'react';
import SearchBox from './SearchBox';
import LocationContainer from './LocationContainer';


function App() {
  
  const[dataLocationPage1, setLocationPage1] = useState([])
  const[dataLocationPage2, setLocationPage2] = useState([])
  const[dataLocationPage3, setLocationPage3] = useState([])
  const[dataLocationPage4, setLocationPage4] = useState([])
  const[dataLocationPage5, setLocationPage5] = useState([])
  const[dataLocationPage6, setLocationPage6] = useState([])
  const[dataLocationTotal, setDataLocationTotal] = useState([])
  const[location, setLocation] = useState('')

  useEffect(()=> {
    for (let numberPage = 1; numberPage < 7; numberPage++){
      const fetchLocation = async () => {
        let urlLocation = `https://rickandmortyapi.com/api/location?page=${numberPage}`
        let dataLocation = await fetch(urlLocation).then(respon => respon.json())
        numberPage == 1? setLocationPage1(dataLocation.results): null
        numberPage == 2? setLocationPage2(dataLocation.results): null
        numberPage == 3? setLocationPage3(dataLocation.results): null
        numberPage == 4? setLocationPage4(dataLocation.results): null
        numberPage == 5? setLocationPage5(dataLocation.results): null
        numberPage == 6? setLocationPage6(dataLocation.results): null
      }
      fetchLocation()
    }
  },[])

  useEffect(()=> {
    setDataLocationTotal(dataLocationTotal.concat(dataLocationPage1,dataLocationPage2,dataLocationPage3,dataLocationPage4,dataLocationPage5,dataLocationPage6))
  },[dataLocationPage6])

  useEffect(()=> {
    if(dataLocationTotal.length){
      setLocation(dataLocationTotal[Math.round(Math.random()*dataLocationTotal.length)].url)
    }
  },[dataLocationTotal])
  
  let setLocationValue = locationValue => {
    if(dataLocationTotal.length && locationValue){
      dataLocationTotal.forEach((location) => {
        if(location.name.toLowerCase() == locationValue.toLowerCase()){
          setLocation(location.url)
        }
      })
    }
  }
  setLocationValue()
  
  return (
    <div className="App">
      <h2 className="Hello">Hello</h2>
      <header className="App-header">
        <SearchBox location={setLocationValue}/>
        <LocationContainer ubicationUrl={location}/>
      </header>
    </div>
  )
}

export default App;
