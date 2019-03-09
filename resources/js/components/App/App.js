import React, { useEffect, useRef, useState } from 'react';
import { AppContainer } from './App.styles';
import MediaHandler from '../../MediaHandler';
import ChatVideo from '../ChatVideo/ChatVideo';

const App = () => {
  const [toggled, toggleButton] = useState(false);
  const myVideo = useRef(null);
  const userVideo = useRef(null);
  const [hasMedia, setHasMedia] = useState(false);
  const [otherUserId, setOtherUserId] = useState(null);


  useEffect(() => {
    const mediaHandler = new MediaHandler();

    mediaHandler.getPermissions()
      .then(stream => {
        setHasMedia(true);

        try {
          myVideo.current.src = URL.createObjectURL(stream)
        } catch (e) {
          myVideo.current.srcObject = stream
        }

        myVideo.current.play();
      })
  }, [])

  const videoData = [{ class: 'my-video', ref: myVideo }, { class: 'user-video', ref: userVideo }]

  return (
    <AppContainer className="container">
      <div className="row">
        {videoData.map((video, idx) => (
          <ChatVideo key={idx} videoClass={video.class} videoRef={video.ref} />
        ))}
      </div>
      <button onClick={() => toggleButton(!toggled)}>{toggled ? 'woof' : 'bark'}</button>
    </AppContainer>
  )
}

export default App;