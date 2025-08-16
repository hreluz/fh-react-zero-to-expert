import { mockGifs } from "./mock-data/gifs.mock"
import  './index.css';
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./shared/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['batman']);

  const handleTermClicked = (term:string) => {
    console.log(term);
  }

  const handleSearch = (query:string) => {
    console.log(query)
  }

  return (
    <>
      <CustomHeader title="My Gifs" description="Search your fav gifs"/>

      <SearchBar placeholder="Search anything" onQuery={handleSearch}/>

      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

      <GifList gifs={mockGifs}/>
    </>
  )
}
