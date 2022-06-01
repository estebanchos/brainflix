import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import VideoPage from './pages/VideoPage/VideoPage';
import UploadVideoPage from './pages/UploadVideoPage/UploadVideoPage';


function App() {
  return ( 
    <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={VideoPage} />
            <Route path='/upload-video' component={UploadVideoPage} />
            <Route path='/video/:id' exact component={VideoPage} />
          </Switch>
        </Router>
   );
}

export default App;