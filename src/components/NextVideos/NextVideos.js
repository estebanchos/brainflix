import { Component } from 'react';
import './NextVideos.scss';
import videosDetails from '../../data/videos.json';
import VideoCard from '../VideoCard/VideoCard';
import * as uid from 'uniqid';


class NextVideos extends Component {

    state = {
        videos: videosDetails
    }

    render() {
        const activeVideo = "84e96018-4022-434e-80bf-000ce4cd12b8"; // need to update to prop
        // const { activeVideo } = this.props

        return (
            <section className='next-videos'>
                <h3 className='next-videos__title'>NEXT VIDEOS</h3>
                <ul className='next-videos__list'>
                    {this.state.videos.map(video => {
                        if(video.id !== activeVideo) {
                            return <VideoCard
                                title={video.title}
                                channel={video.channel}
                                image={video.image}
                                key={video.id}
                            />
                        }
                    })}
                </ul>
            </section>
        );
    }
}

export default NextVideos;