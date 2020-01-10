import React, {useState, useEffect} from 'react';
import './tempUnit.css';

export const TempUnit = ({tempCel, tempFah}) => {
  const [currentTempUnit, setCurrentTempUnit] = useState({tempUnit: "", temp: ""});
  const {tempUnit, temp} = currentTempUnit;
 
  const changeTempUnit = (e)=> {
    e.preventDefault();
    if (tempUnit === "C") {
      setCurrentTempUnit({tempUnit: "F", temp: tempFah})
        } else {
          setCurrentTempUnit({tempUnit: "C", temp: tempCel})
        }
  }

useEffect(()=>{
  setCurrentTempUnit({tempUnit: "C", temp: tempCel})
}, [tempCel])
  return (
    <div>
      <button className="tempUnitButton" onClick={changeTempUnit}>{temp} {String.fromCharCode(176)} {tempUnit}</button>
    </div>
 
  )
}