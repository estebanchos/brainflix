import { dynamicDateFormatter } from '../../utils/dataFormater';
import viewIcon from '../../assets/images/icons/views.svg'
import likeIcon from '../../assets/images/icons/likes.svg'
import './CurrentInfo.scss';

function CurrentInfo({ activeVideo }) {
    return (
        <article className='current-video__info info'>
            <h1 className='info__title'>{activeVideo.title}</h1>
            <div className='info__details details'>
                <div className='details__meta'>
                    <p className='details__author'>{`By ${activeVideo.channel}`}</p>
                    <p className='details__date'>{dynamicDateFormatter(activeVideo.timestamp)}</p>
                </div>
                <div className='details__stats'>
                    <div className='details__views views'>
                        <img className='views__icon' src={viewIcon} alt='views icon' />
                        <p className='views__text'>{activeVideo.views}</p>
                    </div>
                    <div className='details__likes likes'>
                        <img className='likes__icon' src={likeIcon} alt='likes icon' />
                        <p className='likes__text'>{activeVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p className='info__description'>{activeVideo.description}</p>
        </article>
    );
}

export default CurrentInfo;