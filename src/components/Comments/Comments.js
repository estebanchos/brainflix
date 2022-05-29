import CommentList from "../CommentList/CommentList";
import Form from "../Form/Form";
import './Comments.scss';


function Comments({ comments }) {
    return ( 
        <section className="comments">
            <h3 className="comments__title">
                {`${comments.length} Comments`}
                </h3>
            <Form />
            <CommentList comments={comments} />
        </section>
     );
}

export default Comments;