import type { CSSProperties } from "react";

const firstName = 'Bruce';
const lastName  = 'Wayne';

const favoriteGames = ['Batman Arkham Asylum', 'Batman Arkham City', 'Batman Arkham Knight'];

const address = {
    city: 'Miami',
    state: 'California',
    zipCode: 10788
}

const isActive = true;

const myStyles:CSSProperties = {
    backgroundColor: 'red',
    borderRadius: isActive ? 10 : 20,
    padding: 10
}

export function MyAwesomeApp () {
    return (
        <>
            <div data-testid="div-app">
                <h1 data-testid="first-name-title">{firstName}</h1>
                <h3>{lastName}</h3>
                <p>{favoriteGames.join(', ')}</p>
                <p style={myStyles} >
                    {JSON.stringify(address)}
                </p>
            </div>
        </>
    )
}