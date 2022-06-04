import './CommentCard.scss';
import { dynamicDateFormatter } from '../../utils/dataFormater';
import deleteIcon from '../../assets/images/icons/delete.svg'

function CommentCard({ name, timestamp, comment, id, deleteComment }) { 
    return (
        <article className='comment-card'>
            <img className='comment-card__avatar' src='' />
            <div className='comment-card__content'>
                <div className='comment-card__info comment-info'>
                    <p className='comment-info__author'>{name}</p>
                    <p className='comment-info__date'>{dynamicDateFormatter(timestamp)}</p>
                </div>
                <p className='comment-card__comment'>{comment}</p>
                <div className='comment-card__actions'>
                    <img className='comment-card__delete' src={deleteIcon} alt='button to delete comment' id={id} onClick={deleteComment} />
                </div>
            </div>
        </article>
    );
}

export default CommentCard;