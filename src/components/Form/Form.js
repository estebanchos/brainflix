import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import addIcon from '../../assets/images/icons/add-comment.svg'
import './Form.scss';

function Form({ clickHandler }) {
    return (
        <article className='form-container'>
            <Avatar />
            <form onSubmit={clickHandler} className='new-comment'>
                <div className='new-comment__container'>
                    <label className='new-comment__label' htmlFor='comment'>JOIN THE CONVERSATION</label>
                    <textarea className='new-comment__input' name='comment' id='comment' placeholder='Add a new comment'></textarea>
                </div>
                <Button icon={addIcon} action="COMMENT" />
            </form>
        </article>
    );
}

export default Form;