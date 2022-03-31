import { useCallback, useEffect, useState } from 'react';
import { PokemonType } from '../../@types/Pokemon';
import Api from '../../services/Api';

const Q49Pokemon: React.FC = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemons, setPokemons] = useState<PokemonType[]>([]);
    const [pokemon, setPokemon] = useState<PokemonType | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPokemons = useCallback(() => {
        Api.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(response => setPokemons(response.data.results))
            .catch()
            .finally();
    }, []);

    const getPokemon = useCallback(() => {
        setIsLoading(true);

        Api.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => setPokemon(response.data))
            .catch()
            .finally(() => setIsLoading(false));
    }, [pokemonName]);

    useEffect(() => {
        getPokemons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="d-flex col-4 mb-3">
                <select
                    name="Pokemon"
                    className="form-select me-2"
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                >
                    <option value="">Selecione seu pokemon</option>
                    {pokemons.map((_pokemon, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <option key={index} value={_pokemon.name}>
                            {_pokemon.name}
                        </option>
                    ))}
                </select>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => getPokemon()}
                >
                    Selecionar
                </button>
            </div>
            {isLoading ? (
                <div className="d-flex col-4 justify-content-center mt-5">
                    <div className="spinner-grow me-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="d-flex col-4 justify-content-center">
                    {pokemon && (
                        <div
                            style={{
                                height: 150,
                                width: 150,
                                backgroundImage: `url(${pokemon?.sprites?.front_default})`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                            }}
                        />
                    )}
                </div>
            )}
        </div>
    );
};
export default Q49Pokemon;
