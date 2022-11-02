import './searchComponent.css';

const SearchComponent = ({setQuery}) => {
  return (
    <>
        <div className="search">
            <input id="search-input" type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
        </div>
    </>
  )
}

export default SearchComponent