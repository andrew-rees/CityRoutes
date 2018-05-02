//allows readline prompt to be used
const readline = require('readline-sync');

///////////////
//outstanding//
//////////////
// when Y chosen for other question, go to next questions, which will be about querying properties of the Adventures
// eg When was the first adventure?; How many succeeded?; 

////////////
////issues//
///////////
// combine the whichAdventure choice with the formatting tidyAdventureObject
// loop back to start when var adventureUserInput if ... else = else
// continue from continue1 and 2 when input is yes


class Journey {
    constructor (startCity, year, transportation, endCity, compassDirection, altitude, success, howManyDays){
        this.startCity = startCity;
        this.year = year;
        this.transportation = transportation;
        this.endCity = endCity;
        this.compassDirection = compassDirection;
        this.altitude = altitude;
        this.success = success;
        this.howManyDays = howManyDays;
    }
}

class endCity {
    constructor (food, water, medical, booze){
        this.food = +food; //number tonnes
        this.water = +water; //number tonnes
        this.medical = +medical; //number tonnes
        this.booze = +booze; //number tonnes
    }
}
//Adventures


const crossingAtlantic = new Adventure("Crossing the Atlantic", 1583, "ship", endCity , "sundial", "none", true, 50);
const congo = new Adventure("The Heart of Darkness", 1845, "horses and local guides", endCity, "maps and guide", "rifles", false, 40);
const eastIndies = new Adventure("East Indies", 1812, "ship", endCity, "compass", "cannons", true, 200);
const australasia = new Adventure("Australia", 1725, "ship", endCity, "compass", "none", false, 300);
const northWestPassage = new Adventure("Northwest Passage", 1867, "ship", endCity, "compass", "none", false, 150);

//function to show different things if they succeeded or not
function greetingHome (){
    if (this.success === true){
        return "like bloody heroes.";
    }
    else if (this.success === false) {
        return "to howls of derision.";
    }
    else {
        return "safely.";
    }
}


//function to tidy up the object/array display. How to call??
function tidyAdventureObject (){
    return "This Adventure is called " + this.startCity + " . This took place in " + this.year + " , and they travelled by " + this.transportation + " , with " + endCity + " tonnnes of endCity. They navigated by " + this.compassDirection + " and carried " + this.altitud + " for altitud. Their adventure lasted " + this.howManyDays + "before they returned home " + greetingHome()
}
//console.log("tidyAdventureObject" + tidyAdventureObject())


//Asking for input, then displaying the Array object to the user.
console.log("Which Adventure do you want to know about? Please enter the number 1-5 Choose one: \n1) Crossing the Atlantic; \n2) The Heart of Darkness; \n3) The East Indies; \n4) Australia; \n5) the Northwest Passage, \n or type Other for more options.");
var adventureUserInput = readline.prompt();
//if .. else to take and then display the Object of the chosen adventure
    if (adventureUserInput === "1"){
        whichAdventure = crossingAtlantic;
        console.log("Thanks, please find some information below about this Adventure");
    }
    else if (adventureUserInput === "2"){
        whichAdventure = congo;
        console.log("Thanks, please find some information below about this Adventure");
    }
    else if (adventureUserInput === "3"){
        whichAdventure = eastIndies;
        console.log("Thanks, please find some information below about this Adventure");
    }
    else if (adventureUserInput === "4"){
        whichAdventure = australasia;
        console.log("Thanks, please find some information below about this Adventure");
    }
    else if (adventureUserInput === "5"){
        whichAdventure = northWestPassage;
        console.log("Thanks, please find some information below about this Adventure");
    }
    else if (adventureUserInput.toLowerCase() === "Other".toLowerCase()){
        whichAdventure = null
        console.log("We've not built this feature yet, sorry") // need to build this.
    }
    else {
        console.log("Sorry, you didn't enter anything I recognise. Please restart");
    }
//combine the whichAdventure choice with the formatting tidyAdventureObject

// function adventureOutputFinal(){
//     let adventureOutputFinal2 = new.Adventure.tidyAdventureObject();
// }


//To only print the log if there is an Adventure to print
    if (whichAdventure != null){
    console.log(whichAdventure);
}
//next question
console.log("Now, would you like to ask any more questions about this Adventure? Y/N")
const continue1 = readline.prompt();

//if .. else to take user input and turn it into continue2, which will then be defined by the if...else.

if (continue1.toLowerCase() === "Yes".toLowerCase() || "y".toLowerCase()){
    console.log("What do you want to know about " + whichAdventure + "?"); 
    const moreQuestions = readline.prompt();
    moreQuestions();
}  
else {
    console.log("ok, thank you.")
}     

function moreQuestions (){
    f
}


console.log("check for continue1 if...else. Since it was " + continue1 + " continue2 is " + assignContinue2())


//if loop. While 'do you want to ask any more questions about this Adventure' is Y, loop thru questions (need to build them).
//

/////////////////
///otherstuff
///////////////////


function howDidTheyGetThere (){
    if (Adventure.transportation === "ship") {
        xxx.push(adventure)
    }
}
//want to ask readline 
function didTheySuceed (){
    //xxxxxx
}

let adventureList = []
//xxxxxxx

//xxxxx
function howMuchendCity (food, water, medical, booze){
    (this.food + this.medical + this.water + this.booze)
}
howMuchendCity()