import React from 'react'

const CurrentWeather = () => {
  return (
    <div className="bg-white w-full rounded-2xl flex flex-col p-12">
      <div className="text-neutral-500 flex-row">
        <h2>Current Weather</h2>
      </div>
      <div className="flex">
        <div className="left-panel flex flex-col flex-1">
          <span className="text-large">Location:</span>
          <div>Image 22 degrees</div>
          <span>Heavy Rain</span>
        </div>
        <div className="right-panel flex flex-col flex-1">
          <span>humidity</span>
          <span>wind</span>
          <span>pressure</span>
        </div>
      </div>
    </div>
  )
}

export { CurrentWeather }
