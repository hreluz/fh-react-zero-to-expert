import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

describe('getGifsByQuery', () => {
    test('should return a list of gifs', async() => {
        const gifs = await getGifsByQuery(`batman`);
        const [gif1] = gifs;

        expect(gifs.length).toBe(10);

        expect(gif1).toStrictEqual({
            id: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            url: expect.any(String),
            title: expect.any(String),
        })
    });
});