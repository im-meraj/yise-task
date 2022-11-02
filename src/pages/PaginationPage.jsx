import SearchComponent from "../components/Search/SearchComponent"
import Posts from "../components/Posts/PostsComponent"
import { useState } from "react";

const PaginationPage = () => {
  const [query, setQuery] = useState('');
  // console.log(query);
  return (
    <>
        <SearchComponent setQuery={setQuery} />
        <Posts query={query} />
    </>
  )
}

export default PaginationPage