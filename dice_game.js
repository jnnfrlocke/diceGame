"use strict"
// A game that uses at least one 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided dice
// Hide/display functions can't be nested in another function because they are being called from HTML


// Need global variable to pass info from die rolls into finalStatement function
var finalState = [];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hide/display elements - these are called in the html
function hideQuestion1() {
    document.getElementById('question1').style.display = "none";
    document.getElementById("question2").style.display = "block";
    document.getElementById("d1").style.display = "none";
    document.getElementById("d2").style.display = "block";
    var roll1 = roll4Sided();
    finalStatement(roll1);
    document.getElementById("answer").style.display = "block";
    document.getElementById("answer").innerHTML = roll1;
}

function hideQuestion2() {
    document.getElementById('question2').style.display = "none";
    document.getElementById("question3").style.display = "block";
    document.getElementById("d2").style.display = "none";
    document.getElementById("d3").style.display = "block";
    var roll2 = roll6Sided();
    finalStatement(roll2);
    document.getElementById("answer").style.display = "block";
    document.getElementById("answer").innerHTML = roll2;
}

function hideQuestion3() {
    document.getElementById('question3').style.display = "none";
    document.getElementById("question4").style.display = "block";
    document.getElementById("d3").style.display = "none";
    document.getElementById("d4").style.display = "block";
    var roll3 = roll8Sided();
    finalStatement(roll3);
    document.getElementById("answer").style.display = "block";
    document.getElementById("answer").innerHTML = roll3;
}

function hideQuestion4() {
    document.getElementById('question4').style.display = "none";
    document.getElementById("question5").style.display = "block";
    document.getElementById("d4").style.display = "none";
    document.getElementById("d5").style.display = "block";
    var roll4 = roll12Sided();
    finalStatement(roll4);
    document.getElementById("answer").style.display = "block";
    document.getElementById("answer").innerHTML = roll4;
}

function hideQuestion5() {
    document.getElementById('question5').style.display = "none";
    document.getElementById("question6").style.display = "block";
    document.getElementById("d5").style.display = "none";
    document.getElementById("d6").style.display = "block";
    var roll5 = roll10Sided();
    finalStatement(roll5);
    document.getElementById("answer").style.display = "block";
    document.getElementById("answer").innerHTML = roll5;
}

function hideQuestion6() {
    document.getElementById('question6').style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("d6").style.display = "none";
    document.getElementById("continue").style.display = "none";
    var roll6 = roll20Sided();
    finalStatement(roll6);
    var fs = finalStatement;
    fs();
}

// Return to the first page
function restart() {
    document.getElementById("end").style.display = "none";
    document.getElementById("question1").style.display = "block";
    document.getElementById("d1").style.display = "block";
    location.reload();
}

// Final page
function finalStatement(finalResult) {
    finalState.push(finalResult);
    if (finalState.length === 7) {
        var finalAns = finalState.join(" ");
        document.getElementById("answer").style.display = "block";
        document.getElementById("answer").innerHTML = finalAns;
        console.log(finalAns);
    } else {
        document.getElementById("answer").style.display = "none";
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Roll dice
function roll4Sided() {
    var roll4 = (Math.round(Math.random() * (4 - 1) + 1));
    var answer = "";
    if (roll4 === 1) {
        answer = "You'll be dreaming by the sea.";
    } else if (roll4 === 2) {
        answer = "You're going to relax in the woods.";
    } else if (roll4 === 3) {
        answer = "You are going to party in the city.";
    } else {
        answer = "You'll be chilling in the sun on a tropical island.";
    }
    console.log(answer);
    return answer;
}

function roll6Sided() {
    var roll6 = (Math.round(Math.random() * (6 - 1) + 1));
    var answer2 = "";
    if (roll6 === 1) {
        answer2 = "You'll be staying in a hotel.";
    } else if (roll6 === 2) {
        answer2 = "You'll be staying at a posh all-inclusive resort.";
    } else if (roll6 === 3) {
        answer2 = "You will stay at a cozy bed & breakfast.";
    } else if (roll6 === 4) {
        answer2 = "You're going to be roughing it in a tent.";
    } else if (roll6 === 5) {
        answer2 = "You will float in the harbor on a house boat.";
    } else {
        answer2 = "You'll bunk with friends and family.";
    }
    console.log(answer2);
    return answer2;
}

function roll8Sided() {
    var roll8 = (Math.round(Math.random() * (8 - 1) + 1));
    var answer3 = "";
    if (roll8 === 1) {
        answer3 = "You'll forget your toothbrush.";
    } else if (roll8 === 2) {
        answer3 = "You'll forget toothpaste.";
    } else if (roll8 === 3) {
        answer3 = "You'll forget your comb.";
    } else if (roll8 === 4) {
        answer3 = "You'll forget soap. Are you at a hotel? Because they typically supply soap - lucky you!";
    } else if (roll8 === 5) {
        answer3 = "You will forget your underwear. Oops! Gotta run to the store!";
    } else if (roll8 === 6) {
        answer3 = "You will forget sunscreen. Who cares about a little sunburn, anyway? You will if you get skin cancer...";
    } else if (roll8 === 7) {
        answer3 = "You will forget bug spray. Don't let those skeeters get ya!";
    } else {
        answer3 = "Really? You'll forget your luggage? Maybe someone from home can FedEx it to you?";
    }
    console.log(answer3);
    return answer3;
}

function roll10Sided() {
    var roll10 = (Math.round(Math.random() * (10 - 1) + 1));
    var answer4 = "";
    switch (roll10) {
        case 1:
            answer4 = "You will eat home cooking tonight. Mmmm... comfort food.";
            break;
        case 2:
            answer4 = "You will eat southern food tonight. Y'all better go up the road a piece to find it.";
            break;
        case 3:
            answer4 = "You will eat Mexican tonight. Bueno, no?";
            break;
        case 4:
            answer4 = "You will have French cuisine tonight. Bon appetit!";
            break;
        case 5:
            answer4 = "You will have Greek food tonight. Opaa!";
            break;
        case 6:
            answer4 = "You will eat Persian food tonight. Beh salamati";
            break;
        case 7:
            answer4 = "You will eat Chinese food tonight. Ganbei!";
            break;
        case 8:
            answer4 = "You will eat German food tonight. Enjoy a great German beer with it!";
            break;
        case 9:
            answer4 = "You're going to enjoy Italian food tonight. Have a fine wine with your meal!"
            break;
        default:
            answer4 = "You are having Japanese food tonight. Indulge in some saki! But avoid the fugu...";
    }
    console.log(answer4);
    return answer4;
}

function roll12Sided() {
    var roll12 = (Math.round(Math.random() * (12 - 1) + 1));
    var answer5 = "";
    switch (roll12) {
        case 1:
            answer5 = "Your primary mode of transportation will be walking. Get those walking shoes ready.";
            break;
        case 2:
            answer5 = "You will do a lot of driving on your trip. Do you need driving gloves?";
            break;
        case 3:
            answer5 = "You'll primarily paddle in your canoe while on vacation. Do you have a companion to share paddling duties?";
            break;
        case 4:
            answer5 = "You're going to spend a lot of time in your kayak. Don't forget your PFD!";
            break;
        case 5:
            answer5 = "You will use the local bus system a lot. Get that bus pass!";
            break;
        case 6:
            answer5 = "You're going to ride the train a lot. Do you have the local publice transportation app?";
            break;
        case 7:
            answer5 = "You will ride a horse to get around. Chaps anyone?";
            break;
        case 8:
            answer5 = "Do you know how to ride a camel? You will learn and use it as your primary mode of transportation.";
            break;
        case 9:
            answer5 = "You're going to ride a donkey around your destination. Are you at the Grand Canyon?!";
            break;
        case 10:
            answer5 = "You're gonna bike your way around your destination. They don't allow cars? You might be on Mackinac Island.";
            break;
        case 11:
            answer5 = "You'll be zooming around on a scooter during this trip.";
            break;
        default:
            answer5 = "Are you in India? Because you're going to be taking rickshaws a lot.";
    }
    console.log(answer5);
    return answer5;
}

function roll20Sided() {
    var roll20 = (Math.round(Math.random() * (20 - 1) + 1));
    var answer6 = "";
    switch (roll20) {
        case 1:
            answer6 = "You're going to the carnival today! Cotton candy? Amusement rides? Yes, yes!";
            break;
        case 2:
            answer6 = "You're going to the zoo today! Lions and tigers and bears, oh my!";
            break;
        case 3:
            answer6 = "You're going swimming today! Hopefully you didn't forget your suit.";
            break;
        case 4:
            answer6 = "You're going to enjoy some time on the water in a boat today! Bring a jacket - it might get breezy!";
            break;
        case 5:
            answer6 = "You're going to take a hike today! Get out your gear.";
            break;
        case 6:
            answer6 = "You're going fishing today! Got your rod and line?";
            break;
        case 7:
            answer6 = "You're going to a water park today! Don't overdo it.";
            break;
        case 8:
            answer6 = "You're going to visit the casino today! Don't roll snake eyes!";
            break;
        case 9:
            answer6 = "You're visiting the racetrack today! You might want some earplugs. Those engines are LOUD!";
            break;
        case 10:
            answer6 = "You're going to watch the sunset tonight! You're such a dreamer. ";
            break;
        case 11:
            answer6 = "You're going to a concert tonight! Don't get injured by bodysurfing.";
            break;
        case 12:
            answer6 = "You will watch a play tonight! Perhaps something by Tennessee Williams?";
            break;
        case 13:
            answer6 = "What looks good at the movie theater? Pick something good because that's tonight's entertainment!";
            break;
        case 14:
            answer6 = "What's the local history like? That's what you'll learn today when you visit the historical monuments nearby.";
            break;
        case 15:
            answer6 = "What language do the locals speak? Looks like you're going to learn it today. What's that? They speak your language? I guess you're signing up for a different language class.";

            break;
        case 16:
            answer6 = "Are you keen on saving the environment? You'll enjoy volunteering for the local conservation organization.";
            break;
        case 17:
            answer6 = "Fancy yourself a humanitarian? Great, you'll volunteer for the local humanitarian organization.";
            break;
        case 18:
            answer6 = "Ever dreamed of a safari? You're going to take one today - make sure to bring water!";
            break;
        case 19:
            answer6 = "You're gonna hit the shops for souvenirs. Don't spend all your cash!";
            break;
        default:
            answer6 = "Like telling stories? Better get your thinking cap on because you're having a campfire tonight!";
    }
    console.log(answer6);
    return answer6;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////