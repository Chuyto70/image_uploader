import useUploadingImage from '../hooks/useUploadImage'
import Image from './Image'

export default function UploadPhase () {
  const { handleDragOver, changedInput, handleDrop, handleDragEnter, handleDragExit, imagen } = useUploadingImage()
  return (
    <>
      <h1>Upload your image</h1>
      <span>File should be .JPG, PNG...</span>
      <div onDragEnter={handleDragEnter} onDragLeave={handleDragExit} onDragOver={handleDragOver} onDrop={handleDrop} className='drop'>
        {
          !imagen
            ? <><Image /> <span>Drag & drop your image here</span></>
            : <img src={imagen} width='100%' style={{ objectFit: 'cover' }} />
        }
      </div>
      <span>Or</span>
      <input accept='image/png, image/jpeg, image/jpg' name='file' onChange={changedInput} type='file' style={{ display: 'none' }} id='file' />
      <label htmlFor='file'>Choose a file</label>
    </>
  )
}
