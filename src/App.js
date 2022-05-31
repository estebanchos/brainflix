import { Component } from 'react';
import NextVideos from './components/NextVideos/NextVideos';
import videosFullDetails from './data/video-details.json';
import './App.scss';
import Comments from './components/Comments/Comments';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import Header from './components/Header/Header';
import CurrentInfo from './components/CurrentInfo/CurrentInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


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
        <CurrentVideo poster={this.state.activeVideo.image} />
        <main className='main'>
          <section className='main__current-video'>
            <CurrentInfo activeVideo={this.state.activeVideo} />
            <Comments clickHandler={this.addComment} comments={this.state.activeVideo.comments} />
          </section>
          <aside className='main__side-bar'>
            <NextVideos activeVideo={this.state.activeVideo.id} clickHandler={this.changeVideo} />
          </aside>
        </main>
      </>
    );
  }
}

export default App;
