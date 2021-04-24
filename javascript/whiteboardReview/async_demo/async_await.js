console.log("loaded js")

const baseURL = 'https://pokeapi.co/api/v2/'

// Promise Chaining
fetch(baseURL + 'pokemon/ditto') 
    .then(res => res.json())
    .then(json => console.log(json))

// Async / Await

// await 2 promises 1 fetch 2 res conversion
const getPokemon = async() => {
    const result = await fetch(baseURL + 'pokemon/eevee');
    let json = await result.json();
    console.log(json)
}
getPokemon()
fetchPokemon()
async function fetchPokemon(){
    const result = await fetch(baseURL + 'pokemon/eevee');
    let json = await result.json();
    console.log(json)
}
