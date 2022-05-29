import { Component } from 'react';
import NextVideos from './components/NextVideos/NextVideos';
import videosFullDetails from './data/video-details.json';
import './App.scss';
import Comments from './components/Comments/Comments';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

const sampleVideo = videosFullDetails[0]

class App extends Component {
  state = {}

  render() {
    return (
      <>
        <SearchBar />
        <Header />
        <CurrentVideo />
        <Comments comments={sampleVideo.comments} />
        <NextVideos />
      </>
    );
  }
}

export default App;
