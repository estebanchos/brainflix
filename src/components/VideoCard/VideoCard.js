import './VideoCard.scss';

const VideoCard = ({ id, title, channel: author, image }) => {
    return (
        <li
            className='video'
            key={id}
            onClick=''>
            <img
                className='video__thumbnail'
                src={image}
                alt='video thumbnail'
            />
            <div className='video__info-container'>
                <h3 className='video__title'>
                    {title}
                </h3>
                <p className='video__author'>
                    {author}
                </p>
            </div>
        </li>
    );
}

export default VideoCard;