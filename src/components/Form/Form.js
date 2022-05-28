import Avatar from '../Avatar/Avatar';
import './Form.scss';

function Form() {
    return (
        <div className='form-container'>
            <Avatar />
            <form className='new-comment'>
                <div className='new-comment__container'>
                    <label className='new-comment__label' htmlFor='comment'>JOIN THE CONVERSATION</label>
                    <input className='new-comment__input' name='comment' id='comment' placeholder='Add a new comment' />
                </div>
            </form>
        </div>
    );
}

export default Form;