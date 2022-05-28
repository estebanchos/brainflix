import './Button.scss';
import addComment from '../../assets/images/icons/add-comment.svg'

function Button() {
    return ( 
        <button className='button'>
            <img className='button__icon' src={addComment} alt='add icon' />
            <p className='button__text'>COMMENT</p>
        </button>
     );
}

export default Button;