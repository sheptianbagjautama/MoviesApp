import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Video = ({onClose}) => {
  return (
    <VideoPlayer
      source={{
        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      }}
      onBack={() => onClose()}
      onEnd={() => onClose()}
      fullscreenOrientation="all"
    />
  );
};

export default Video;
