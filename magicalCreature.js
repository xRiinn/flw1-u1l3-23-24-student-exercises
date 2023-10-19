// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName = "Boya";

// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription = "crazy, mentally ill, stinky, dangerous, degenerate, stupid, and emo."


// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.
let isFriendly = false;



// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
let visitorAgeDecimal = (Math.random() * 60) + 1;
let visitorAge = (Math.floor(visitorAgeDecimal));

// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
let canVisit;
if (visitorAge > 15){
  canVisit = true;
} else {
  canVisit = false;
};

// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.
let zooSummary = "The first creature is called " + creatureName + ". He is " + creatureDescription + "Is he friendly? " + isFriendly + 
". You are " + visitorAge + " years old. Are you valid to visit Boya? " + canVisit;

// 7. Print the summary using console.log()
console.log(zooSummary);


// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.
// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.
let creatureName2 = "Tarin";
let creatureDescription2 = "mentally ill, get upset if she fails her standards, goofy asf, and sussy";
let isFriendly2 = false;
if (visitorAge > 18){
  canVisit2 = true;
} else {
  canVisit2 = false;
};
let zooSummary2 = ". The second creature is called " + creatureName2 + ". She is " + creatureDescription2 + ". Is she friendly? " + isFriendly2 + 
  ". You are " + visitorAge + " years old. Are you valid to visit Tarin? " + canVisit2;

let creatureName3 = "Boo";
let creatureDescription3 = "a little mental, probabably responsible, pretty nice, and a little crazy";
let isFriendly3 = true;
if (visitorAge > 13){
  canVisit3 = true;
} else {
  canVisit3 = false;
};
let zooSummary3 = ". The third creature is called " + creatureName3 + ". She is " + creatureDescription3 + ". Is she friendly? " + isFriendly3 + 
  ". You are " + visitorAge + " years old. Are you valid to visit Boo? " + canVisit3;

let creatureName4 = "Siru";
let creatureDescription4 = "a sweetheart, loveable (platonically), amazing, and literally the best of the best";
let isFriendly4 = true;
if (visitorAge > 13){
  canVisit4 = true;
} else {
  canVisit4 = false;
};
let zooSummary4 = ". The fourth creature is called " + creatureName4 + ". She is " + creatureDescription4 + ". Is she friendly? " + isFriendly4 + 
  ". You are " + visitorAge + " years old. Are you valid to visit Siru? " + canVisit4;

let allZooSummaries = zooSummary + zooSummary2 + zooSummary3 + zooSummary4;
console.log(allZooSummaries);

