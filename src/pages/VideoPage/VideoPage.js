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
        videos: []
    }

    addComment = (e) => {
        e.preventDefault();

    }

    componentDidMount() {
        axios.get(videosUrl + apiKey)
            .then(res => {
                this.setState({
                    videos: res.data
                })
                const id = res.data[0].id;
                axios.get(videosUrl + '/' + id + apiKey)
                    .then(res => {
                        this.setState({
                            activeVideo: res.data
                        })
                    })
            })
            .catch(err => {
                console.error('could not complete request:' + err)
            })
    }

    componentDidUpdate(prevProps) {
        const { match: { params: { id } } } = this.props
        if(prevProps.match.params.id !== id) {
            axios.get(videosUrl + '/' + id + apiKey)
            .then(res => {
                this.setState({
                    activeVideo: res.data
                })
            })
            .catch(err => {
                console.error('could not update: ' + err)
            })
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