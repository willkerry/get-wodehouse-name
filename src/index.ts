type Name = [string, string];

const NAMES: Name[] = [
  ["Arnold", "Abney"],
  ["Georgiana", "Alcester"],
  ["Gertrude", "Alcester"],
  ["Wilfred", "Allsop"],
  ["Beefy", "Anstruther"],
  ["Samuel", "Bagshott"],
  ["Rosie", "Banks"],
  ["Plug", "Basham"],
  ["Madeline", "Bassett"],
  ["Watkyn", "Bassett"],
  ["Cyril", "Bassington-Bassington"],
  ["Rupert", "Baxter"],
  ["Sebastian", "Beach"],
  ["Augustus", "Beckford"],
  ["James", "Belford"],
  ["Bill", "Belfry"],
  ["Cora", "Bellinger"],
  ["Puffy", "Benger"],
  ["John", "Bickersdyke"],
  ["Bicky", "Bickersteth"],
  ["Charles", "Biffen"],
  ["Fruity", "Biffen"],
  ["Flossie", "Billson"],
  ["Battling", "Billson"],
  ["Stiffy", "Bing"],
  ["Beefy", "Bingham"],
  ["Herbert", "Binstead"],
  ["Felicia", "Blakeny"],
  ["Roland", "Bleke"],
  ["Julia", "Blunt"],
  ["Montague", "Bodkin"],
  ["Willoughby", "Braddock"],
  ["Kid", "Brady"],
  ["Daphne", "Braythwayt"],
  ["Biscuit", "Brent"],
  ["Lavender", "Briggs"],
  ["Rupert", "Brinkley"],
  ["Sue", "Brown"],
  ["Freddie", "Bullivant"],
  ["Percy", "Bulstrode"],
  ["Gertrude", "Butterwick"],
  ["John", "Butterwick"],
  ["Alexandra", "Callender"],
  ["Hugo", "Carmody"],
  ["Tom", "Chase"],
  ["Stilton", "Cheesewright"],
  ["Anne", "Chester"],
  ["Marmaduke", "Chuffington"],
  ["Clarence", "Chugwater"],
  ["Alice", "Coker"],
  ["Judson", "Coker"],
  ["Edward", "Cootes"],
  ["Corky", "Corcoran"],
  ["Edwin", "Craye"],
  ["Florence", "Craye"],
  ["Percy", "Craye"],
  ["Bingley", "Crocker"],
  ["Eugenia", "Crocker"],
  ["Jimmy", "Crocker"],
  ["Charles", "Cuthbertson"],
  ["Bill", "Dawlish"],
  ["Dude", "Dawson"],
  ["Ray", "Denison"],
  ["Kay", "Derrick"],
  ["Phyllis", "Derrick"],
  ["Niagara", "Donaldson"],
  ["Penelope", "Donaldson"],
  ["Cynthia", "Drassilis"],
  ["Blair", "Egglestone"],
  ["George", "Emerson"],
  ["Finky", "Finglass"],
  ["Gussie", "Fink-Nottle"],
  ["Gazeka", "Firby-Smith"],
  ["Julia", "Fish"],
  ["Ronnie", "Fish"],
  ["Sam", "Fisher"],
  ["Boko", "Fittleworth"],
  ["Agnes", "Flack"],
  ["Elmer", "Ford"],
  ["Nesta", "Ford"],
  ["Ogden", "Ford"],
  ["Sally", "Foster"],
  ["Barmy", "Fotheringay-Phipps"],
  ["Horace", "French"],
  ["Dora", "Garland"],
  ["Prudence", "Garland"],
  ["Jeremy", "Garnet"],
  ["Alaric", "Gilpin"],
  ["Archibald", "Gilpin"],
  ["Linda", "Gilpin"],
  ["Tuppy", "Glossop"],
  ["Honoria", "Glossop"],
  ["Oswald", "Glossop"],
  ["Roderick", "Glossop"],
  ["Lionel", "Green"],
  ["Agatha", "Gregson"],
  ["Spenser", "Gregson"],
  ["Thomas", "Gregson"],
  ["Dolly", "Gunn"],
  ["Esmond", "Haddock"],
  ["Jack", "Hale"],
  ["Eve", "Halliday"],
  ["Frances", "Hammond"],
  ["Sinclair", "Hammond"],
  ["Harry", "Hawk"],
  ["Aline", "Hemmingway"],
  ["Kipper", "Herring"],
  ["Nobby", "Hopwood"],
  ["Bob", "Jackson"],
  ["Joe", "Jackson"],
  ["Mike", "Jackson"],
  ["Phyllis", "Jackson"],
  ["Bat", "Jarvis"],
  ["Reginald", "Jeeves"],
  ["Tom", "Jellicoe"],
  ["Constance", "Keeble"],
  ["Joseph", "Keeble"],
  ["Elizabeth", "Lakenheath"],
  ["Claire", "Lippett"],
  ["Martha", "Lippett"],
  ["Bill", "Lister"],
  ["Algernon", "Little"],
  ["Mortimer", "Little"],
  ["Bingo", "Little"],
  ["Ikey", "Llewellyn"],
  ["Buick", "MacGinnis"],
  ["Pugsy", "Maloney"],
  ["Gussie", "Mannering-Phipps"],
  ["Horace", "Mant"],
  ["Mildred", "Mant"],
  ["Ashe", "Marson"],
  ["Dora", "Mason"],
  ["Angus", "McAllister"],
  ["John", "McEachern"],
  ["Molly", "McEachern"],
  ["Sidney", "McMurdo"],
  ["Ralston", "McTodd"],
  ["Chester", "Meredith"],
  ["Arthur", "Mifflin"],
  ["Sandy", "Miller"],
  ["Jerry", "Mitchell"],
  ["Soapy", "Molloy"],
  ["Florence", "Moresby"],
  ["Kevin", "Moresby"],
  ["Archibald", "Mulliner"],
  ["Augustine", "Mulliner"],
  ["Spike", "Mullins"],
  ["Eustace", "Oates"],
  ["Cooley", "Paradene"],
  ["Francis", "Parker"],
  ["Gregory", "Parsloe-Parsloe"],
  ["Willie", "Partridge"],
  ["Albert", "Peasemarch"],
  ["Aileen", "Peavey"],
  ["Gwladys", "Pendlebury"],
  ["Horace", "Pendlebury-Davenport"],
  ["Reggie", "Pepper"],
  ["Ailine", "Peters"],
  ["Peter", "Pett"],
  ["Diana", "Phipps"],
  ["Percy", "Pilbeam"],
  ["Stinker", "Pinker"],
  ["Corky", "Pirbright"],
  ["James", "Pirbright"],
  ["Sydney", "Pirbright"],
  ["James", "Pitt"],
  ["Tipton", "Plimsoll"],
  ["Seabury", "Pongleton"],
  ["Mustard", "Pott"],
  ["Edwin", "Pott"],
  ["Polly", "Pott"],
  ["Catsmeat", "Potter-Pirbright"],
  ["Izzy", "Previn"],
  ["Heloise", "Pringle"],
  ["Oofy", "Prosser"],
  ["Myrtle", "Prosser"],
  ["Rupert", "Psmith"],
  ["Stinker", "Pyke"],
  ["Roderick", "Pyke"],
  ["Spider", "Reilly"],
  ["Jack", "Repetto"],
  ["Isabel", "Rockmetteller"],
  ["Gloria", "Salt"],
  ["James", "Schoonmaker"],
  ["Myra", "Schoonmaker"],
  ["Audrey", "Sheridan"],
  ["Flick", "Sheridan"],
  ["Sam", "Shotter"],
  ["Charlie", "Silversmith"],
  ["Monica", "Simmons"],
  ["Muriel", "Singer"],
  ["Oliver", "Sipperley"],
  ["Vera", "Sipperley"],
  ["Wilfred", "Slingsby"],
  ["Bud", "Smithers"],
  ["Roderick", "Spode"],
  ["Dwight", "Stoker"],
  ["Emerald", "Stoker"],
  ["J. Washburn", "Stoker"],
  ["Pauline", "Stoker"],
  ["William", "Tell"],
  ["Ambrose", "Tennyson"],
  ["Reggie", "Tennyson"],
  ["Thomas", "Thomas"],
  ["Cecily", "Threepwood"],
  ["Clarence", "Threepwood"],
  ["Freddie", "Threepwood"],
  ["Galahad", "Threepwood"],
  ["George", "Threepwood"],
  ["James", "Threepwood"],
  ["Jane", "Threepwood"],
  ["Millicent", "Threepwood"],
  ["Rockmetteller", "Todd"],
  ["Hash", "Todhunter"],
  ["Angela", "Travers"],
  ["Bonzo", "Travers"],
  ["Dahlia", "Travers"],
  ["George", "Travers"],
  ["Tom", "Travers"],
  ["George", "Tupper"],
  ["Alexander", "Twist"],
  ["Frederick", "Twistleton"],
  ["Pongo", "Twistleton"],
  ["Valerie", "Twistleton"],
  ["Julia", "Ukridge"],
  ["Millie", "Ukridge"],
  ["Stanley", "Ukridge"],
  ["Aubrey", "Upjohn"],
  ["Aubrey", "Upjohn"],
  ["Gerald", "Vail"],
  ["Elizabeth", "Vickers"],
  ["Alfred", "Voules"],
  ["Robert", "Waller"],
  ["Ann", "Warblington"],
  ["Orlo", "Watkins"],
  ["Egbert", "Wedge"],
  ["Hermione", "Wedge"],
  ["Veronica", "Wedge"],
  ["Teddy", "Weeks"],
  ["George", "Wellbeloved"],
  ["William", "West"],
  ["Augustus", "Whiffle"],
  ["Percy", "Whipple"],
  ["Bobbie", "Wickham"],
  ["Cynthia", "Wickhammersley"],
  ["Freddie", "Widgeon"],
  ["George", "Widgeon"],
  ["Maud", "Wilberforce"],
  ["Billy", "Windsor"],
  ["Daphne", "Winkworth"],
  ["Gertrude", "Winkworth"],
  ["Claude", "Winnington-Bates"],
  ["Ginger", "Winship"],
  ["Algernon", "Wooster"],
  ["Bertie", "Wooster"],
  ["Claude", "Wooster"],
  ["Emily", "Wooster"],
  ["Eustace", "Wooster"],
  ["Henry", "Wooster"],
  ["Willhoughby", "Wooster"],
  ["Alexander", "Worple"],
  ["Matthew", "Wrenn"],
  ["Algy", "Wymondham-Wymondham"],
  ["Jane", "Yorke"],
  ["Leila", "Yorke"],
];

const getRandomName = () => {
  return NAMES[Math.floor(Math.random() * NAMES.length)] as Name;
};

const formatEmail = (name: Name) => {
  return `${name[0].toLowerCase()}}@${name[1].toLowerCase()}.com`;
};

/**
 * Get the full name of a Wodehouse character
 *
 * @returns A random Wodehouse name
 * @example
 * ```
 * const wodehouseName = getWodehouseName();
 * //=> "Bertie Wooster"
 * ```
 */
export const getWodehouseName = () => {
  return getRandomName().join(" ");
};

/**
 * Get the first name of a Wodehouse character
 * @returns A random Wodehouse first name
 * @example
 * ```
 * const wodehouseFirstName = getWodehouseFirstName();
 * //=> "Bertie"
 * ```
 */
export const getWodehouseFirstName = () => {
  return getRandomName()[0];
};

/**
 * Get the last name of a Wodehouse character
 * @returns A random Wodehouse last name
 * @example
 * ```
 * const wodehouseLastName = getWodehouseLastName();
 * //=> "Wooster"
 * ```
 */
export const getWodehouseLastName = () => {
  return getRandomName()[1];
};

/**
 * Get the email address of a Wodehouse character
 * @returns A random Wodehouse email address
 * @example
 * ```
 * const wodehouseEmail = getWodehouseEmail();
 * //=> "bertie@wooser.com"
 * ```
 */
export const getWodehouseEmail = () => {
  return formatEmail(getRandomName());
};

/**
 * Get the 'full details' of a Wodehouse character
 *
 * @returns An object containing the first name, last name and email address of a Wodehouse character
 * @example
 * ```
 * const wodehouseDetails = getWodehouseFullDetails();
 * //=> { firstName: "Bertie", lastName: "Wooster", email: "bertie@wooster.com" }
 * ```
 */
export const getWodehouseFullDetails = () => {
  const name = getRandomName();
  return {
    firstName: name[0],
    lastName: name[1],
    email: formatEmail(name),
  };
};
