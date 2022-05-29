
import logo from '../../assets/images/logo/brainflix-logo.svg';
import uploadIcon from '../../assets/images/icons/upload.svg';
import Avatar from '../Avatar/Avatar';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';
import Button from '../Button/Button';

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='brainflix logo' />
            <div className='header__container'>
                <SearchBar />
                <Avatar />
                <Button icon={uploadIcon} action='UPLOAD' />
            </div>
        </header>
    );
}

export default Header;