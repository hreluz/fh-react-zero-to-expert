import { useState } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query:string) => string;
}

export const SearchBar = ({placeholder = 'Search ...', onQuery}: Props) => {

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onQuery(query)
  }

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch()
      }
    }

  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
