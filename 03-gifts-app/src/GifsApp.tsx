import { mockGifs } from "./mock-data/gifs.mock"
import  './index.css';
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./shared/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['batman']);

  const handleTermClicked = (term:string) => {
    console.log(term);
  }

  const handleSearch = async(query:string = '') => {
    query = query.trim().toLowerCase();

    if (query.length == 0) return;

    if (previousTerms.includes(query)) return;

    console.log(query)
    
    setPreviousTerms([query, ...previousTerms].splice(0,8));

    const gifs = await getGifsByQuery(query);
    console.log(gifs)
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
