import { Component } from 'react';
import NextVideos from './components/NextVideos/NextVideos';
import videosFullDetails from './data/video-details.json';
import './App.scss';
import CommentList from './components/CommentList/CommentList';
import Avatar from './components/Avatar/Avatar';


const sampleVideo = videosFullDetails[0]

class App extends Component {
  state = {}

  render() {
    return (
      <>
        <Avatar />
        <CommentList comments={sampleVideo.comments} />
        <NextVideos />
      </>
    );
  }
}

export default App;
