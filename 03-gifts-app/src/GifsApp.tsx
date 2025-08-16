import { mockGifs } from "./mock-data/gifs.mock"
import  './index.css';
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./shared/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader title="My Gifs" description="Search your fav gifs"/>

      <SearchBar placeholder="Search anything"/>

      <PreviousSearches searches={['Batman', 'Flash']}/>

      <GifList gifs={mockGifs}/>
    </>
  )
}
