export function paleta(name: string) {
    let MAPPER = new Map<String, String>([
        ['fire', '#F20000'],
        ['water', '#5841CB'],
        ['grass', '#a4d541'],
        ['flying', '#bdbde6'],
        ['poison', '#a44a8b'],
        ['normal', '#e6bd62'],
        ['electric', '#f6bd20'],
        ['bug', '#6ad531'],
        ['ice', '#94c5ff'],
        ['fighting', '#bd314a'],
        ['ground', '#b48310'],
        ['psychic', '#ff5a6a'],
        ['rock', '#524a4a'],
        ['ghost', '#8b6283'],
        ['dragon', '#ee9c39'],
        ['dark', '#29314a'],
        ['steel', '#8b8b8b'],
        ['fairy', '#ffacac']
    ]);
    return MAPPER.get(name);
}

export function subPaleta (name: string){
    let MAPPER = new Map<String, String>([
        ['fire', '#9F0000'],
        ['water', '#270FA1'],
        ['grass', '#88B828'],
        ['flying', '#9797D8'],
        ['poison', '#7F396B'],
        ['normal', '#DEA52B'],
        ['electric', '#EBAF0A'],
        ['bug', '#5ABA26'],
        ['ice', '#5CA5FF'],
        ['fighting', '#922639'],
        ['ground', '#835F0B'],
        ['psychic', '#FF3347'],
        ['rock', '#363030'],
        ['ghost', '#6B4C65'],
        ['dragon', '#E18514'],
        ['dark', '#1D2335'],
        ['steel', '#666666'],
        ['fairy', '#FF7070']
    ]);
    return MAPPER.get(name);
}