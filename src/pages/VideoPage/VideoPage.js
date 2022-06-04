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
                const id = this.props.match.params.id || res.data[0].id;
                this.getActiveVideo(videosUrl + '/' + id + apiKey)
            })
            .catch(err => {
                console.error('could not complete request:' + err)
            })
    }

    componentDidUpdate(prevProps) {
        const { match: { params: { id } } } = this.props;
        const { defaultVideoId } = this.state;
        const prevId = prevProps.match.params.id;

        if (prevId !== id) {
            const activeId = id ? id : defaultVideoId;
            this.getActiveVideo(`${videosUrl}/${activeId}${apiKey}`);
        }
        window.scrollTo(0,0)
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