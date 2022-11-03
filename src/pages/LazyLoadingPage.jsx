import { useState } from 'react';
import CardsComponent from '../components/Cards/CardsComponent';
import SearchComponent from '../components/Search/SearchComponent';


const LazyLoading = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchComponent setQuery={setQuery}/>
      <CardsComponent query={query} />
    </>
  )
}

export default LazyLoading