import { useState } from 'react'
import Upload from './components/Upload'
import MyContextProvider from './context'

export default function App () {
  const [phase, setPhase] = useState('upload')
  return (
    <MyContextProvider value={{ phase, setPhase }}>
      <main style={{ display: 'flex', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <Upload />
      </main>
    </MyContextProvider>
  )
}
