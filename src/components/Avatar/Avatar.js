import './Avatar.scss';
import avatar from '../../assets/images/mohan-muruge.jpg'

function Avatar({ className }) {
    return ( 
        <img className={!className ? 'avatar' : 'header__avatar'} src={avatar} alt='user avatar' />
     );
}

export default Avatar;