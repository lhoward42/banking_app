// l Statements

/*ls are used to execute a piece of code if a condition is true. They allow our code to make decisions and carry out actions based on those decisions.
*/

// If Statements
//Switches
//-Ternaries

mathResults = 2 + 2 === 4;
console.log(mathResults);

if(mathResults)console.log('This equates to true');

//Block Body + Else

if(mathResults){
    console.log('This equates to false');
};

//Chaining if/else statements
//else ifs allows use to provide a new condition to test if the conditions above are not met.
let tempF = 30;

if(tempF > 95){
    console.log("It's Hot");
} else if (tempF >50){
    console.log("It's warm!");
} else if(tempF > 32){
    console.log("It's chilly!");
} else {
    console.log("I cannot provide the weather")
}

//Testing multiple conditions

let myName = "Laurice";
let age = 29;

if(myName === "Laurice"){
    console.log("name Logged");
} else if(age === 29){
    console.log('Age Logged');
} else if(myName === "Laurice" && age === 29){
    console.log("Name & Age Logged");
}

//Switches
//RUn a block of code based on different cases.

tempF = 72;

switch(true){
    case tempF > 95:
        console.log("It's hot");
        break;
    case tempF > 50:
        console.log("It's warm");
        break;
    case tempF > 32:
        console.log("It's Chilly!");
        break;
    case temp < 32:
        console.log("It's freezing");
        break;
    default:
        console.log("I cannot provide the weather");            

};

let dog = 'husky';
let dogLower = dog.toLowerCase()

switch(dog){
    case 'husky':
        console.log("The husky jumped in snow!");
        break;
    case 'lab':
        console.log("The lab caught the ball");
        break;
    case 'shepherd':
        console.log("the shepherd wagged its tail"); 
        break;
};

let firstName = "Justin";
switch (firstName){
    case 'Justin':
    case 'Amit':
        console.log('They are an instructors')
        break;
    default: console.log("They are a student");
}

//Ternarnies
//Conditions ? True : Fasle 

let lightSwitch = true;

lightSwitch?console.log('Lights are on'): console.log('Lights are off');

tempF > 95 ? console.log("It's hot!") :
tempF > 50 ? console.log("It's warm"):
tempF > 32 ? console.log("It's chilly") :
tempF < 32 ? console.log("It's freezing!"):
console.log("i cannot provide the weather");