import { mockGifs } from "./mock-data/gifs.mock"
import  './index.css';
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./shared/components/PreviousSearches";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader title="My Gifs" description="Search your fav gifs"/>

      <SearchBar placeholder="Search anything"/>

      <PreviousSearches/>

      <div className="gifs-container">
        {
          mockGifs.map((gif) => (
            <div key={gif.id} className="gif-card">
              <img src={gif.url} alt={gif.title} />
              <h3>{gif.title}</h3>
              <p>
                {gif.width}x{gif.height} (1.5mb)
              </p>
            </div>
          ))
        }
      </div>
    </>
  )
}
