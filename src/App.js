import { Component } from 'react';
import NextVideos from './components/NextVideos/NextVideos';
import videosFullDetails from './data/video-details.json';
import './App.scss';
import CommentCard from './components/CommentCard/CommentCard';

class App extends Component {
  state = {}

  render() {
    return (
      <>
        <CommentCard />
        <NextVideos />
      </>
    );
  }
}

export default App;
