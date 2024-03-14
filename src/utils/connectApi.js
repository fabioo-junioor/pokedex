async function getPokemons(pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
        method: 'GET',
        
    })
    if(!response.ok){
        return null

    }else{
        const dados = await response.json()
        return dados

    }
}

export { getPokemons };