import React from 'react'

interface WeatherIconProps {
  icon: string
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ icon }) => {
  if (!icon) return <></>
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather Icon"
      />
    </div>
  )
}

export default WeatherIcon
