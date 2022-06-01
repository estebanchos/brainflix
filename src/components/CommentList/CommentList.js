import './CommentList.scss';
import CommentCard from "../CommentCard/CommentCard";

function CommentList({ comments }) {
    if (!comments) return "..."
    console.log(comments)
    return (
        <div className="comments__gallery">
            {comments.map(comment =>
                <CommentCard
                    name={comment.name}
                    timestamp={comment.timestamp}
                    comment={comment.comment}
                    key={comment.id}
                />)}
        </div>
    );
}

export default CommentList;