import CommentList from "../CommentList/CommentList";
import Form from "../Form/Form";
import './Comments.scss';


function Comments({ comments, addComment, deleteComment }) {
    return ( 
        <section className="comments">
            <h3 className="comments__title">
                {!comments ? "..." : comments.length + " Comments"}
                </h3>
            <Form addComment={addComment} />
            <CommentList comments={comments} deleteComment={deleteComment} />
        </section>
     );
}

export default Comments;