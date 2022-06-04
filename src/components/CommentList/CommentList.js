import './CommentList.scss';
import CommentCard from "../CommentCard/CommentCard";

function CommentList({ comments, deleteComment }) {
    if (!comments) return "..."
    return (
        <div className="comments__gallery">
            {comments.map(comment =>
                <CommentCard
                    name={comment.name}
                    timestamp={comment.timestamp}
                    comment={comment.comment}
                    key={comment.id}
                    id={comment.id}
                    deleteComment={deleteComment}
                />)}
        </div>
    );
}

export default CommentList;