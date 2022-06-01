import { Component } from 'react';
import './NextVideos.scss';
import videosDetails from '../../data/videos.json';
import VideoCard from '../VideoCard/VideoCard';
import { Link } from 'react-router-dom';

function NextVideos({ activeVideo, videos, clickHandler }) {
    return (
        <section className='next-videos'>
            <h3 className='next-videos__title'>NEXT VIDEOS</h3>
            <ul className='next-videos__list'>
                {videos.map(video => {
                    if (video.id !== activeVideo) {
                        return (
                            <Link
                                className='next-videos__item'
                                to={'video/' + video.id}
                                key={video.id}
                            >
                                <VideoCard
                                    title={video.title}
                                    channel={video.channel}
                                    image={video.image}
                                    onClick={() => { clickHandler(video) }}
                                />
                            </Link>
                        )
                    }
                })}
            </ul>
        </section>
    );
}

export default NextVideos;