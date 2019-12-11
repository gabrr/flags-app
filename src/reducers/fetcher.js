const INITIAL_STATE = {
    countries: {},
    querySearched: [],
    loading: true,
    error: null
}


export default function Fetcher(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "FETCH_COUNTRIES":
            return {...state, countries: [...action.countries], loading: false };
        case "ERROR_FETCHING":
            return {...state, error: action.err };
        case "QUERY_SEARCHED":
            return {...state, querySearched: action.query }
        default:
            return state;

    }
}



// {
//     name: "Colombia",
//     topLevelDomain: [".co"],
//     alpha2Code: "CO",
//     alpha3Code: "COL",
//     callingCodes: ["57"],
//     capital: "Bogotá",
//     altSpellings: ["CO", "Republic of Colombia", "República de Colombia"],
//     region: "Americas",
//     subregion: "South America",
//     population: 48759958,
//     latlng: [4.0, -72.0],
//     demonym: "Colombian",
//     area: 1141748.0,
//     gini: 55.9,
//     timezones: ["UTC-05:00"],
//     borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
//     nativeName: "Colombia",
//     numericCode: "170",
//     currencies: [{
//         code: "COP",
//         name: "Colombian peso",
//         symbol: "$"
//     }],
//     languages: [{
//         iso639_1: "es",
//         iso639_2: "spa",
//         name: "Spanish",
//         nativeName: "Español"
//     }],
//     translations: {
//         de: "Kolumbien",
//         es: "Colombia",
//         fr: "Colombie",
//         ja: "コロンビア",
//         it: "Colombia",
//         br: "Colômbia",
//         pt: "Colômbia"
//     },
//     flag: "https://restcountries.eu/data/col.svg",
//     regionalBlocs: [{
//         acronym: "PA",
//         name: "Pacific Alliance",
//         otherAcronyms: [],
//         otherNames: ["Alianza del Pacífico"]
//     }, {
//         acronym: "USAN",
//         name: "Union of South American Nations",
//         otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
//         otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
//     }],
//     cioc: "COL"
// }
// }