import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faCloud, faSun, faCloudShowersHeavy, faSnowflake, faPooStorm } from '@fortawesome/free-solid-svg-icons';

export const Icons = ({description}) => {
  function getIcon(desc) {
    var descLowerCase = desc.toLowerCase()
    switch (descLowerCase) {
      case 'drizzle':
        return faCloudRain;
      case 'clouds':
        return faCloud;
      case 'rain':
        return faCloudShowersHeavy
      case 'snow':
        return faSnowflake
      case 'clear':
        return faSun
      case 'thunderstorm':
        return faPooStorm
      default:
        return null;
    }
  }
  const currentIcon = getIcon(description)

  return (
    <FontAwesomeIcon icon={currentIcon} size='10x' />
  )
}