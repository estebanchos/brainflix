import './SearchBar.scss';
import searchIcon from '../../assets/images/icons/search.svg';

function SearchBar() {
    return (
        <form className='search-bar'>
            <img className='search-bar__icon' src={searchIcon} alt='search icon' />
            <input className='search-bar__input' name='search-input' id='search-input' placeholder='Search' />
        </form>
    );
}

export default SearchBar;
