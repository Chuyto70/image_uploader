import React, { useContext } from 'react'
import { MyContext } from '../context'
import './css/Uploaded.css'
const Uploaded = () => {
  const appCtx = useContext(MyContext)
  const handleCopy = () => {
    navigator.clipboard.writeText(appCtx.link)
    console.log('COPIADO!')
  }
  return (
    <div className='imagen_uploaded_container'>
      <img src='../../public/checked.png' alt='' />
      <h2>Uploaded Successfully!</h2>
      <img src={appCtx.img} alt='imagen subida' className='imagen_uploaded' />
      <div className='link_container'>
        <p>{appCtx.link}</p>
        <button onClick={handleCopy}>Copy link</button>
      </div>
    </div>
  )
}

export default Uploaded
