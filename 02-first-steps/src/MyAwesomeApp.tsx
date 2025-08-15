const firstName = 'Bruce';
const lastName  = 'Wayne';

const favoriteGames = ['Batman Arkham Asylum', 'Batman Arkham City', 'Batman Arkham Knight'];

const address = {
    city: 'Miami',
    state: 'California',
    zipCode: 10788
}

export function MyAwesomeApp () {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <p>{JSON.stringify(address)}</p>
        </>
    )
}