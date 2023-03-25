import { createContext, useState } from 'react'

export const MyContext = createContext({})

export default function MyContextProvider ({ children }) {
  const [phase, setPhase] = useState('upload')
  const [img, setImg] = useState(null)
  const [link, setLink] = useState('')
  return (
    <MyContext.Provider value={{ phase, setPhase, img, setImg, link, setLink }}>
      {children}
    </MyContext.Provider>
  )
}
