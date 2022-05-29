import { Component } from 'react';
import NextVideos from './components/NextVideos/NextVideos';
import videosFullDetails from './data/video-details.json';
import './App.scss';
import Comments from './components/Comments/Comments';

const sampleVideo = videosFullDetails[0]

class App extends Component {
  state = {}

  render() {
    return (
      <>
        <Comments comments={sampleVideo.comments} />
        <NextVideos />
      </>
    );
  }
}

export default App;
