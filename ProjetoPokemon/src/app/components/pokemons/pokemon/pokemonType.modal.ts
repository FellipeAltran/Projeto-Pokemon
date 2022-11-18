export interface PokemonType {
    id: number;
    name: string;
    pokemon: Array<{
        slot: number;
        pokemon: {
            name: string;
            url: string
        }
    }>
}
