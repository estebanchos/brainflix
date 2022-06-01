import './Header.scss';
import logo from '../../assets/images/logo/brainflix-logo.svg';
import uploadIcon from '../../assets/images/icons/upload.svg';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt='brainflix logo' />
            </Link>
            <div className='header__container'>
                <SearchBar />
                <Avatar className='header__avatar' />
                <Link className='header__upload-button' to='/upload-video'>
                    <Button icon={uploadIcon} action='UPLOAD' />
                </Link>
            </div>
        </header>
    );
}

export default Header;