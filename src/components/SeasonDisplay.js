import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: <span role="img" aria-label="">&#127774;</span>
  },
  winter: {
    text: 'Burr, it\'s chilly',
    iconName: <span role="img" aria-label="">&#10052;</span>
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = ({lat}) => {
  const season = getSeason(lat, new Date().getMonth())
  // const text = season === 'winter' ? 'Burr, it\'s chilly' : 'Let\'s hit the beach'
  // const icon = season === 'winter' ? 'snowflake' : 'sun'
  // const icon = season === 'winter' ? <span>&#10052;</span> : <span role="img" aria-label="">&#127774;</span>
  const {text, iconName} = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <div className="icon-left">{iconName}</div>
      <h1>{text}</h1>
      <div className="icon-right">{iconName}</div>
    </div>
  )
}

export default SeasonDisplay;
