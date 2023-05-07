class Character{
    constructor(name,hp,str,mag,dex,spd,lck,def,res,cha){
        this.name = name; 
        this.hp = hp;
        this.str = str;
        this.mag = mag;
        this.dex = dex;
        this.spd = spd;
        this.lck = lck;
        this.def = def;
        this.res = res;
        this.cha = cha;
    }
}



/* function checkByName(arg, val) {
    pippo = arg.filter((character) => character.hp > val)
    return pippo.forEach((el) => console.log(`${el.name} ${el.hp}`))
} */



// /* SORT BY ... */ ----------------------------------------------------------------------------------------------------------------------------

function sortByHp(arg) {
    arg.sort((a, b) => b.hp - a.hp)
    return arg.forEach((el) => console.log(`${el.name} ${el.hp}`))
}

function sortByStr(arg) {
    arg.sort((a, b) => b.str - a.str)
    return arg.forEach((el) => console.log(`${el.name} ${el.str}`))
}

function sortByMag(arg) {
    arg.sort((a, b) => b.mag - a.mag)
    return arg.forEach((el) => console.log(`${el.name} ${el.mag}`))
}

function sortByDex(arg) {
    arg.sort((a, b) => b.dex - a.dex)
    return arg.forEach((el) => console.log(`${el.name} ${el.dex}`))
}

function sortBySpd(arg) {
    arg.sort((a, b) => b.spd - a.spd)
    return arg.forEach((el) => console.log(`${el.name} ${el.spd}`))
}

// /* AVERAGE STATS OF ... */ -----------------------------------------------------------------------------------------------------------------------

function averageByName(arg, name) {
    // /* con filter prendo SOLO gli elementi dell'array che soddisfano le mie condizioni */
    // let pippo = arg.filter((el) => el.name === name);
    // /* pippo adesso è un array con solo un elemento al suo interno, cioè un oggetto */

    // let newObj = Object.assign(...pippo);
    // /* ho assegnato l'unico elemento di pippo a newObj, quindi adesso newObj ha come valore un oggetto */

    // newObj = Object.values(newObj);
    // /* Mi restituisce un array con al suo interno SOLO i valori del mio oggetto di partenza e li assegno a newObj */
    // newObj = newObj.slice(1)
    // /* vado a tagliare l'elemento in indice 0 perché è una stringa */

    // newObj = newObj.reduce((a ,b) => a + b)
    // /* faccio un reduce adesso che ho solo valori numerici all'interno dell'array */

    // return console.log(`${name}'s average stat = ${Math.round(newObj / 9)}`)
    // /* faccio la media dividendo per 9, che sono il numero di stats */
    
    let pippo = arg.filter((el) => el.name === name);
    
    let newObj = Object.assign(...pippo);
    
    newObj = Object.values(newObj);
    newObj = newObj.slice(1)
    newObj = newObj.reduce((a ,b) => a + b)
    
    return console.log(`${name}'s average stat = ${Math.round(newObj / 9)}`)
    
}



// --------------------------------------------------------------------------------------------------------------------------------------------------



let feCharacter = [
    /* BLACK EAGLES */
    new Character("Edelgard", 81, 81, 72, 61, 57, 42, 61, 47, 85),
    new Character("Hubert", 67, 43, 80, 62, 63, 51, 45, 57, 49),
    new Character("Dorothea", 76, 30, 61, 62, 57, 49, 38, 50, 58),
    new Character("Ferdinand", 93, 64, 40, 56, 70, 56, 49, 36, 57),
    new Character("Bernadetta", 70, 51, 40, 75, 69, 41, 41, 39, 49),
    new Character("Caspar", 97, 65, 41, 61, 62, 58, 51, 35, 46),
    new Character("Petra", 83, 59, 36, 69, 85, 63, 42, 35, 63),
    new Character("Linhardt", 63, 42, 66, 56, 55, 63, 48, 65, 43),
    new Character("Jeritza", 79, 74, 42, 49, 78, 41, 63, 42, 42),
    

    /* BLUE LIONS */
    new Character("Dimitri", 99, 87, 38, 69, 69, 42, 57, 36, 77),
    new Character("Dedue", 108, 74, 30, 42, 35, 44, 70, 35, 41),
    new Character("Felix", 84, 78, 42, 62, 77, 55, 51, 35, 42),
    new Character("Mercedes", 64, 37, 72, 62, 58, 54, 44, 65, 58),
    new Character("Ashe", 68, 51, 36, 76, 71, 56, 43, 49, 36),
    new Character("Annette", 55, 43, 73, 69, 50, 49, 40, 41, 49),
    new Character("Sylvain", 98, 65, 42, 48, 70, 49, 56, 38, 57),
    new Character("Ingrid", 79, 51, 49, 56, 83, 62, 51, 58, 64),
    

    /* GOLDEN DEER */
    new Character("Claude", 71, 61, 40, 89, 76, 63, 50, 42, 76),
    new Character("Lorenz", 99, 58, 57, 62, 57, 48, 55, 56, 46),
    new Character("Hilda", 94, 66, 36, 42, 70, 49, 49, 39, 76),
    new Character("Raphael", 114, 73, 31, 48, 33, 49, 63, 46, 51),
    new Character("Lysithea", 48, 30, 86, 82, 69, 40, 36, 41, 51),
    new Character("Ignatz", 70, 51, 42, 69, 70, 76, 43, 49, 45),
    new Character("Marianne", 68, 30, 73, 56, 57, 49, 39, 64, 57),
    new Character("Leonie", 78, 59, 38, 76, 84, 56, 57, 36, 57),


    /* CHURCH OF SEIROS */
    new Character("Rhea (NPC)", 86, 52, 65, 56, 56, 56, 43, 60, 97),
    new Character("Manuela", 91, 53, 48, 56, 83, 52, 42, 44, 69),
    new Character("Hanneman", 77, 43, 78, 62, 35, 49, 36, 57, 48),
    new Character("Seteth", 92, 65, 51, 70, 67, 49, 43, 41, 65),
    new Character("Flayn", 56, 37, 77, 62, 48, 46, 36, 72, 65),
    new Character("Cyril", 85, 55, 48, 78, 76, 66, 45, 41, 48),


    /* KNIGHTS OF SEIROS */
    new Character("Jeralt (NPC)", 94, 64, 30, 62, 54, 40, 49, 48, 49),
    new Character("Catherine", 92, 70, 36, 56, 75, 43, 42, 37, 35),
    new Character("Alois", 86, 71, 33, 48, 56, 42, 55, 37, 57),
    new Character("Gilbert", 101, 65, 35, 62, 42, 40, 61, 35, 49),
    new Character("Shamir", 71, 58, 35, 75, 56, 76, 37, 35, 43),


    /* DLC */
    new Character("Yuri", 64, 59, 55, 68, 92, 77, 48, 51, 71),
    new Character("Balthus", 100, 71, 48, 39, 46, 35, 69, 43, 46),
    new Character("Constance", 51, 32, 84, 68, 60, 42, 39, 51, 62),
    new Character("Hapi", 69, 41, 76, 70, 51, 40, 42, 61, 43),
    new Character("Anna", 68, 55, 49, 76, 65, 75, 44, 49, 60),
]


/* sortByStr("Edelgard", mag); */

/* averageByName(feCharacter, "Dimitri") */

/* checkByName(feCharacter, str, "Felix") */





// let banana = [{name: 1}]
// console.log(banana)
// let bananone = Object.assign(...banana)
// console.log(bananone)
// let bananone1 = Object.values(bananone)
// console.log(bananone1)
// let banananana = bananone1.map((el) => el + "!")
// console.log(banananana)
// let banana1 = {name: 'ciaone'}
// console.log(banana1)