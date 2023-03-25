import { useContext, useState } from 'react'
import { MyContext } from '../context'

export default function useUploadingImage () {
  const [imagen, setImagen] = useState(null)

  const appCtx = useContext(MyContext)

  const postingImage = async (e) => {
    e.preventDefault()

    const file = e.dataTransfer === undefined ? e.target.files[0] : e.dataTransfer.files[0]
    const formData = new FormData()
    formData.append('file', file)
    // eslint-disable-next-line no-undef
    appCtx.setImg(e.target.result)
    appCtx.setPhase('uploading')

    const response = await fetch('https://backend-image.onrender.com/upload', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    if (data) {
      const prueba = URL.createObjectURL(file)
      appCtx.setImg(prueba)
      setImagen(prueba)
      console.log(data)
      appCtx.setLink('https://backend-image.onrender.com' + data.url)
      appCtx.setPhase('uploaded')
      return data
    }
  }
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDragEnter = (e) => {
    e.target.style.opacity = 0.6
  }
  const handleDragExit = (e) => {
    e.target.style.opacity = 1
  }

  const handleDrop = async (e) => {
    await postingImage(e)
  }

  const changedInput = async (e) => {
    await postingImage(e)
  }
  return {
    changedInput, handleDrop, handleDragOver, handleDragExit, handleDragEnter, imagen
  }
}
