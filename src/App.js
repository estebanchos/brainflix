import { Component } from 'react';
import VideoCard from './components/VideoCard/VideoCard';
import videosFullDetails from './data/video-details.json';
import './App.scss';

class App extends Component {
  state = {  } 
  
  render() { 
    return (
      <ul>
        <VideoCard 
          id= "84e96018-4022-434e-80bf-000ce4cd12b8"
          title= "Become A Travel Pro In One Easy Lesson"
          channel= "Todd Welch"
          image= "https://i.imgur.com/5qyCZrD.jpg"
        />
      </ul>
    );
  }
}
 
export default App;
