import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query:string) => {}
}

export const SearchBar = ({placeholder = 'Search ...', onQuery}: Props) => {

  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query)
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query)
  }

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch()
        setQuery('')
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
