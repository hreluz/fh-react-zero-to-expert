import { useState } from 'react'
import { getGifsByQuery } from '../../gifs/actions/get-gifs-by-query.action';
import type { Gif } from '../../gifs/interfaces/gifs.interfaces';

const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([])

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async(term:string) => {
    if (gifsCache[term]) {
      setGifs(gifsCache[term]);
      return ;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);

    gifsCache[term] = gifs
  }

  const handleSearch = async(query:string = '') => {
    query = query.trim().toLowerCase();

    if (query.length == 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0,8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  }

  return {
    gifs,
    previousTerms,
    handleTermClicked,
    handleSearch
  }
}
