import { Component } from 'react';
import videosFullDetails from './data/video-details.json';
import videosDetails from './data/videos.json';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadVideoPage from './pages/UploadVideoPage/UploadVideoPage';


class App extends Component {

  state = {
    activeVideo: videosFullDetails[0],
    videos: videosDetails
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
  
  componentDidMount(){
    // axios get, set videos and activeVideo state on App
    // const id = this.state.activeVideo.id;
    // this.setState({
    //   activeVideo: videosFullDetails[0]
    // })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    console.log(this.match)
    // match.url === video.id
  }
  
  render() {
    // const { match } = this.props;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact render={(routeProps) =>
              <VideoPage
                poster={videosFullDetails[0].image}
                activeVideo={videosFullDetails[0]}
                addCommentHandler={this.addComment}
                comments={videosFullDetails[0].comments}
                changeVideoHandler={this.changeVideo}
                videos={this.state.videos}
                {...routeProps}
              />} />
            <Route path='/upload-video' render={() => <UploadVideoPage />} />
            <Route path='video/:id' render={(routeProps) =>
              <VideoPage
                poster={this.state.activeVideo.image}
                activeVideo={this.state.activeVideo}
                addCommentHandler={this.addComment}
                comments={this.state.activeVideo.comments}
                changeVideoHandler={this.changeVideo}
                videos={this.state.videos}
                {...routeProps}
              />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
