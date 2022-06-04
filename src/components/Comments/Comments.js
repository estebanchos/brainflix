import CommentList from "../CommentList/CommentList";
import Form from "../Form/Form";
import './Comments.scss';


function Comments({ refreshComments, activeVideoId, deleteComment, comments }) {
    return ( 
        <section className="comments">
            <h3 className="comments__title">
                {!comments ? "..." : comments.length + " Comments"}
                </h3>
            <Form refreshComments={refreshComments} activeVideoId={activeVideoId} />
            <CommentList comments={comments} deleteComment={deleteComment} />
        </section>
     );
}

export default Comments;