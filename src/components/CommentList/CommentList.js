import './CommentList.scss';
import CommentCard from "../CommentCard/CommentCard";
import * as uid from 'uniqid';

function CommentList({ comments }) {
    return ( 
        <div className="comments__gallery">
            {comments.map(comment => <CommentCard 
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
            key={uid()}
            />)}
        </div>
     );
}

export default CommentList;