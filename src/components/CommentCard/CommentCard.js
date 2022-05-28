import './CommentCard.scss';
import { dynamicDateFormatter } from '../../utils/dataFormater';

const commentSample = {
    "name": "Micheal Lyons",
    "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
    "likes": 0,
    "timestamp": 1628522461000
}

function CommentCard() {
    return (
        <article className='comment-card'>
            <img className='comment-card__avatar' src='' />
            <div className='comment-card__content'>
                <div className='comment-card__info comment-info'>
                    <p className='comment-info__author'>{commentSample.name}</p>
                    <p className='comment-info__date'>{dynamicDateFormatter(commentSample.timestamp)}</p>
                </div>
                <p className='comment-card__comment'>{commentSample.comment}</p>
            </div>
        </article>
    );
}

export default CommentCard;