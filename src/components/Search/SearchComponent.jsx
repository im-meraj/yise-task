import './searchComponent.css';

const SearchComponent = ({setQuery}) => {
  return (
    <>
        <div className="search">
            <label htmlFor="search-input">Search Bar</label>
            <input id="search-input" type="text" placeholder="Enter a Movie Title" onChange={(e) => setQuery(e.target.value)}/>
        </div>
    </>
  )
}

export default SearchComponent