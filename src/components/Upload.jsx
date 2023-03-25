import './css/Upload.css'
import { useContext } from 'react'
import { MyContext } from '../context'
import UploadPhase from './UploadPhase'
import Uploading from './Uploading'
import Uploaded from './Uploaded'

export default function Upload () {
  const appCtx = useContext(MyContext)
  console.log(appCtx)
  return (
    <div className='container_upload'>
      {
        appCtx.phase === 'upload' && <UploadPhase />
      }
      {
        appCtx.phase === 'uploading' && <Uploading />
      }
      {
        appCtx.phase === 'uploaded' && <Uploaded />
      }
    </div>
  )
}
