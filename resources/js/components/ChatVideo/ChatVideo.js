import React from 'react'
import { object, string } from 'prop-types'
import { ChatVideoEl } from './ChatVideo.styles';

const ChatVideo = ({ videoClass, videoRef }) => {
  return (
    <div className="col-12 col-sm-6">
      <ChatVideoEl src="" className={videoClass} ref={videoRef}></ChatVideoEl>
    </div>
  )
}

ChatVideo.propTypes = {
  videoClass: string,
  videoRef: object
}

export default ChatVideo;