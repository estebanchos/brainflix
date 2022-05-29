import { Component } from 'react';
import NextVideos from './components/NextVideos/NextVideos';
import videosFullDetails from './data/video-details.json';
import './App.scss';
import Comments from './components/Comments/Comments';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import Header from './components/Header/Header';
import CurrentInfo from './components/CurrentInfo/CurrentInfo';

class App extends Component {
  state = {
    activeVideo: videosFullDetails[0]
  }

  render() {
    return (
      <>
        <Header />
        <CurrentVideo poster={this.state.activeVideo.image} />
        <main className='main'>
          <section className='main__current-video'>
            <CurrentInfo activeVideo={this.state.activeVideo} />
            <Comments comments={this.state.activeVideo.comments} />
          </section>
          <aside className='main__side-bar'>
            <NextVideos activeVideo={this.state.activeVideo.id} />
          </aside>
        </main>
      </>
    );
  }
}

export default App;
