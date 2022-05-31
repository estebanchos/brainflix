import { Component } from 'react';
import NextVideos from './components/NextVideos/NextVideos';
import videosFullDetails from './data/video-details.json';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoPage from './pages/VideoPage/VideoPage';


class App extends Component {

  state = {
    activeVideo: videosFullDetails[0]
  }

  changeVideo = (newVideo) => {
    const foundVideo = videosFullDetails.find(video => video.id === newVideo.id);
    this.setState({
      activeVideo: foundVideo
    })
  }

  addComment = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Header />
        <VideoPage
          poster={this.state.activeVideo.image}
          activeVideo={this.state.activeVideo}
          addCommentHandler={this.addComment}
          comments={this.state.activeVideo.comments}
          changeVideoHandler={this.changeVideo}
        />
      </>
    );
  }
}

export default App;
