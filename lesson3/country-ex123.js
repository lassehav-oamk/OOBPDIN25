let belgium = {
    name: "Belgium",
    capital: "Brussels",
    population: 11500000,
    languages: ["Dutch", "French", "German"],
    area: 30528,
    GDP: 529.6, // in billion USD,
    iso3166: "BE"
}

let sweden = {
    name: "Sweden",
    capital: "Stockholm",
    population: 10300000,
    languages: ["Swedish"],
    area: 450295,
    GDP: 627.9, // in billion USD,
    iso3166: "SE"
}

let france = {
    name: "France",
    capital: "Paris",
    population: 67000000,
    languages: ["French"],
    area: 643801,
    GDP: 2936.3, // in billion USD,
    iso3166: "FR"
}

let germany = {
    name: "Germany",
    capital: "Berlin",
    population: 83000000,
    languages: ["German"],
    area: 357022,
    GDP: 3845.6, // in billion USD,
    iso3166: "DE"
}
// Ex2
function printCountryInfo(c) {
    //console.log("Belgium, population 224323432");
    console.log(c.name + ", population " + c.population);
}

printCountryInfo(belgium);
printCountryInfo(sweden);
printCountryInfo(france);
printCountryInfo(germany);


//Ex3
const countries = [belgium, sweden, france, germany];

function findCountryWithMaxPopulation(cs) {
    let maxPop = 0;
    for(let i = 0; i < cs.length; i++) {
        if(cs[i].population > maxPop) {
            maxPop = cs[i].population;
        }
    }

    return maxPop;
}

console.log(findCountryWithMaxPopulation(countries));