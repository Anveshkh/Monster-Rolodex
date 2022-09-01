import './search-box.style.css'

const SearchBox = (props) =>{
    const {placeholder, onChangeHandler, className} = props;
    return(
        <input 
        type='search'
        placeholder={placeholder}
        className={`search-box ${className}`}
        onChange = {onChangeHandler}
        />
    )
}

export default SearchBox;