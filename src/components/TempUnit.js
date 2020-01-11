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
    <div className="tooltip">
      <button className="tempUnitButton" onClick={changeTempUnit}><h2>{temp} {String.fromCharCode(176)} <span className="tempUnit">{tempUnit}</span></h2></button>
      <span className="tooltiptext">Click to change temperature scale</span>
    </div>
 
  )
}