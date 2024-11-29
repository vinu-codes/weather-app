import React, { useState, useEffect } from 'react'

type ButtonProps = {
  style: React.CSSProperties
  onClick: () => void
  // calculate: (a: number, b: number) => number
  children: React.ReactNode
}

const Button = ({ style, onClick, children }: ButtonProps) => {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  )
}

const SearchBar = () => {
  const handleClick = () => {}

  return (
    <div>
      Search
      <Button
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={handleClick}
        // calculate={(a, b) => a * b}
      >
        Hello
      </Button>
    </div>
  )
}

export { SearchBar }
