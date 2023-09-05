import { FC } from 'react'
import ReactPlayer from 'react-player'

import { IVideoPlayer } from './video.interface'

const ReactVideoPlayer: FC<IVideoPlayer> = ({ videoSource }) => {
  return (
    <div className="mt-16 rounded-3xl overflow-hidden">
      <ReactPlayer url={videoSource} controls width="100%" height="100%" />
    </div>
  )
}
export default ReactVideoPlayer
