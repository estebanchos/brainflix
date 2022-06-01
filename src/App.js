import { Component } from 'react';
import videosFullDetails from './data/video-details.json';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadVideoPage from './pages/UploadVideoPage/UploadVideoPage';


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
  
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    console.log(this.match)
  }
  
  render() {
    const { match } = this.props;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact render={(routerProps) =>
              <VideoPage
                poster={videosFullDetails[0].image}
                activeVideo={videosFullDetails[0]}
                addCommentHandler={this.addComment}
                comments={videosFullDetails[0].comments}
                changeVideoHandler={this.changeVideo}
                {...routerProps}
              />} />
            <Route path='/upload-video' render={() => <UploadVideoPage />} />
            <Route path='video-:id' render={(routerProps) =>
              <VideoPage
                poster={this.state.activeVideo.image}
                activeVideo={this.state.activeVideo}
                addCommentHandler={this.addComment}
                comments={this.state.activeVideo.comments}
                changeVideoHandler={this.changeVideo}
                {...routerProps}
              />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
