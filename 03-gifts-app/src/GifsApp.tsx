import { mockGifs } from "./mock-data/gifs.mock"
import  './index.css';

export const GifsApp = () => {
  return (
    <>
      <div className="content-center">
          <h1>Gifs Searcher</h1>
          <p>Search the perfect gif</p>
      </div>


      <div className="search-container">
          <input type="text" placeholder="Search gifs" />
          <button>Search</button>
      </div>


      <div className="previous-searches">
        <h2>Previous searches</h2>

        <div className="previous-searches-list">
          <li>Batman</li>
          <li>Superman</li>
          <li>The Flash</li>
        </div>
      </div>


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
