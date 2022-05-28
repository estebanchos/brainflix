import './Avatar.scss';
import avatar from '../../assets/images/mohan-muruge.jpg'

function Avatar() {
    return ( 
        <img className='avatar' src={avatar} alt='user avatar' />
     );
}

export default Avatar;