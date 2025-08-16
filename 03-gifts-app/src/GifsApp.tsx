import  './index.css';
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./shared/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from './counter/hooks/useGifs';

export const GifsApp = () => {
  const {handleSearch, handleTermClicked, gifs, previousTerms} = useGifs();
  return (
    <>
      <CustomHeader title="My Gifs" description="Search your fav gifs"/>

      <SearchBar placeholder="Search anything" onQuery={handleSearch}/>

      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

      <GifList gifs={gifs}/>
    </>
  )
}
