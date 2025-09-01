import { describe, expect, test } from "vitest";

import AxiosMockAdapter from 'axios-mock-adapter'
import { giphyApi } from "./giphy.api";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import { giphySearchResponseMock } from '../../../tests/mock/giphy.response.data';

describe('getGifsByQuery', () => {
    // test('should return a list of gifs', async() => {
    //     const gifs = await getGifsByQuery(`batman`);
    //     const [gif1] = gifs;

    //     expect(gifs.length).toBe(10);

    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         height: expect.any(Number),
    //         width: expect.any(Number),
    //         url: expect.any(String),
    //         title: expect.any(String),
    //     })
    // });

    const mock = new AxiosMockAdapter(giphyApi);

    test('should return a list of gifs', async() => {
        mock.onGet('/search').reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery('batman');
        
        expect(gifs.length).toBe(10);

        gifs.forEach((gif) => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        })
    });
});