import './VideoPage.scss';
import { Component } from 'react';
import axios from 'axios';
import Comments from '../../components/Comments/Comments';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo';
import CurrentInfo from '../../components/CurrentInfo/CurrentInfo';
import NextVideos from '../../components/NextVideos/NextVideos';
import { apiKey, videosUrl } from '../../utils/api';

class VideoPage extends Component {
    state = {
        activeVideo: {},
        videos: [], 
        defaultVideoId: ''
    }

    addComment = (e) => {
        e.preventDefault();

    }

    getActiveVideo = (url) => {
        axios.get(url)
            .then(res => {
                this.setState({
                    activeVideo: res.data
                })
            })
            .catch(err => {
                console.error('could not update: ' + err)
            })
    }

    componentDidMount() {
        axios.get(videosUrl + apiKey)
            .then(res => {
                this.setState({
                    videos: res.data,
                    defaultVideoId: res.data[0].id
                })
                // adding default value for id 
                const id = this.props.match.params.id || res.data[0].id;
                this.getActiveVideo(videosUrl + '/' + id + apiKey)
                // axios.get(videosUrl + '/' + id + apiKey)
                //     .then(res => {
                //         this.setState({
                //             activeVideo: res.data
                //         })
                //     })
            })
            .catch(err => {
                console.error('could not complete request:' + err)
            })
    }

    componentDidUpdate(prevProps) {
        const { match: { params: { id } } } = this.props
        const { match: { url } } = this.props
        const { defaultVideoId } = this.state
        const prevId = prevProps.match.params.id
        // ---- if we return to homepage we get our default video id
        const activeId = id || defaultVideoId
        
        // if (url === '/' && this.state.activeVideo !== defaultVideoId) {
        //     if (url === '/') {
        //     this.getActiveVideo(`${videosUrl}/${defaultVideoId}${apiKey}`);
            // axios.get(videosUrl + '/' + defaultVideoId + apiKey)
            // .then(res => {
            //     this.setState({
            //         activeVideo: res.data
            //     })
            // })
            // .catch(err => {
            //     console.error('could not update: ' + err)
            // })
            // return
        // }

        if(prevId !== activeId) {
            this.getActiveVideo(`${videosUrl}/${activeId}${apiKey}`);
            // axios.get(videosUrl + '/' + id + apiKey)
            // .then(res => {
            //     this.setState({
            //         activeVideo: res.data
            //     })
            // })
            // .catch(err => {
            //     console.error('could not update: ' + err)
            // })
        }
    }

    render() {
        const { activeVideo, videos } = this.state
        if (!activeVideo || !videos) return ''
        return (
            <>
                <CurrentVideo poster={activeVideo.image} />
                <main className='main'>
                    <section className='main__current-video'>
                        <CurrentInfo activeVideo={activeVideo} />
                        <Comments clickHandler={this.addComment} comments={activeVideo.comments} />
                    </section>
                    <aside className='main__side-bar'>
                        <NextVideos activeVideoId={activeVideo.id} videos={videos} />
                    </aside>
                </main>
            </>
        );
    }
}

export default VideoPage;