import './Button.scss';
import addComment from '../../assets/images/icons/add-comment.svg'

function Button({ icon, action }) {
    return ( 
        <button className='button'>
            <img className='button__icon' src={icon} alt='add icon' />
            <p className='button__text'>{action}</p>
        </button>
     );
}

export default Button;