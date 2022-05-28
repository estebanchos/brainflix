import './CommentCard.scss';
import { dynamicDateFormatter } from '../../utils/dataFormater';

function CommentCard({ name, timestamp, comment }) { 
    return (
        <article className='comment-card'>
            <img className='comment-card__avatar' src='' />
            <div className='comment-card__content'>
                <div className='comment-card__info comment-info'>
                    <p className='comment-info__author'>{name}</p>
                    <p className='comment-info__date'>{dynamicDateFormatter(timestamp)}</p>
                </div>
                <p className='comment-card__comment'>{comment}</p>
            </div>
        </article>
    );
}

export default CommentCard;