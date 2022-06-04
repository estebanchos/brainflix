import './NextVideos.scss';
import VideoCard from '../VideoCard/VideoCard';
import { Link } from 'react-router-dom';

function NextVideos({ activeVideoId, videos }) {
    const  returnToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <section className='next-videos'>
            <h3 className='next-videos__title'>NEXT VIDEOS</h3>
            <ul className='next-videos__list'>
                {videos.map(video => {
                    if (video.id !== activeVideoId) {
                        return (
                            <Link
                                className='next-videos__item'
                                to={'/video/' + video.id}
                                key={video.id}
                                onClick={returnToTop}
                            >
                                <VideoCard
                                    title={video.title}
                                    channel={video.channel}
                                    image={video.image}
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