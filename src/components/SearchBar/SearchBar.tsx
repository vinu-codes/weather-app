import React, { useState, useEffect } from 'react'

type ButtonProps = {
  style: React.CSSProperties
  // calculate: (a: number, b: number) => number
  children: React.ReactNode
}

// const Button = ({ style, onClick, children }: ButtonProps) => {
//   return (
//     <button style={style} onClick={onClick}>
//       {children}
//     </button>
//   )
// }

const SearchBar = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log({ name, value })
  }

  return (
    <div>
      {/* <Button
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
      </Button> */}
      <input value={value} onChange={handleChange} />
    </div>
  )
}

export { SearchBar }
