import { Component } from 'react';
import NextVideos from './components/NextVideos/NextVideos';
import videosFullDetails from './data/video-details.json';
import './App.scss';

class App extends Component {
  state = {  } 
  
  render() { 
    return (
      <NextVideos />
    );
  }
}
 
export default App;
