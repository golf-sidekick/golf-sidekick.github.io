import React from 'react'
import {ScreenShotProps} from './ScreenShotProps'

const ScreenShot = ({src}: ScreenShotProps) => {
  return (
    <img
      className={'object-fill bg-center bg-contain bg-clip-content'}
      src={src}
      alt={'Screenshot'}
    />
  )
}

export default ScreenShot
