import './VideoCard.scss';

const VideoCard = ({ title, channel: author, image, onClick }) => {
    return (
        <li
            className='video'
            onClick={onClick}
            >
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