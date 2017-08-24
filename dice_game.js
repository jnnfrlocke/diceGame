"use strict"
// A game that uses at least one 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided dice

var finalState = [];

// Hide Q2-Q6, die2-die6 on page load
function hideAllButQ1() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "none";
    document.getElementById("end").style.display = "none";
    document.getElementById("d2").style.display = "none";
    document.getElementById("d3").style.display = "none";
    document.getElementById("d4").style.display = "none";
    document.getElementById("d5").style.display = "none";
    document.getElementById("d6").style.display = "none";
}
hideAllButQ1();


function hideQuestion1() {
    document.getElementById('question1').style.display = "none";
    document.getElementById("question2").style.display = "block";
    document.getElementById("d1").style.display = "none";
    document.getElementById("d2").style.display = "block";
    var roll1 = roll4Sided();
    console.log(roll1);
    finalStatement(roll1);
}
// var firstRoll = hideQuestion1;


function hideQuestion2() {
    document.getElementById('question2').style.display = "none";
    document.getElementById("question3").style.display = "block";
    document.getElementById("d2").style.display = "none";
    document.getElementById("d3").style.display = "block";
    var roll2 = roll6Sided();
    finalStatement(roll2);
}

function hideQuestion3() {
    document.getElementById('question3').style.display = "none";
    document.getElementById("question4").style.display = "block";
    document.getElementById("d3").style.display = "none";
    document.getElementById("d4").style.display = "block";
    var roll3 = roll8Sided();
    finalStatement(roll3);
}

function hideQuestion4() {
    document.getElementById('question4').style.display = "none";
    document.getElementById("question5").style.display = "block";
    document.getElementById("d4").style.display = "none";
    document.getElementById("d5").style.display = "block";
    var roll4 = roll12Sided();
    finalStatement(roll4);
}

function hideQuestion5() {
    document.getElementById('question5').style.display = "none";
    document.getElementById("question6").style.display = "block";
    document.getElementById("d5").style.display = "none";
    document.getElementById("d6").style.display = "block";
    var roll5 = roll10Sided();
    finalStatement(roll5);
}

function hideQuestion6() {
    document.getElementById('question6').style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("d6").style.display = "none";

    document.getElementById("continue").style.display = "none";
    // document.getElementById("die1").style.display = "block";
    var roll6 = roll20Sided();
    finalStatement(roll6);
    // console.log(finalStatement());
}

function restart() {
    document.getElementById("end").style.display = "none";
    document.getElementById("question1").style.display = "block";
    document.getElementById("d1").style.display = "block";
    location.reload();
}

function finalStatement(finalResult) {
    finalState.push(finalResult);
    // console.log(quest1 + " " + quest2 + " " + quest3 + " " + quest4 + " " + quest5 + " " + quest6);
}

// finalStatement();


function roll4Sided() {
    var roll4 = (Math.round(Math.random() * (4 - 1) + 1));
    var answer = "";
    if (roll4 === 1) {
        answer = "You'll be visiting a location by the sea.";
    } else if (roll4 === 2) {
        answer = "You're going to a place in the woods.";
    } else if (roll4 === 3) {
        answer = "You are going to the city.";
    } else {
        answer = "You'll be on a tropical island.";
    }
    console.log(answer);
    return answer;
}

// roll4Sided();

function roll6Sided() {
    var roll6 = (Math.round(Math.random() * (6 - 1) + 1));
    var answer2 = "";
    if (roll6 === 1) {
        nnswer2 = "You'll be staying in a hotel.";
        // document.write("You'll be staying in a hotel.");
    } else if (roll6 === 2) {
        answer2 = "You'll be staying at an all-inclusive resort.";
        // document.write("You'll be staying at an all-inclusive resort.");
    } else if (roll6 === 3) {
        answer2 = "You will stay at a cozy bed & breakfast.";
        // document.write("You will stay at a cozy bed & breakfast.");
    } else if (roll6 === 4) {
        answer2 = "You're going to be sleeping in a tent.";
        // document.write("You're going to be sleeping in a tent.");
    } else if (roll6 === 5) {
        answer2 = "You will stay on a house boat.";
        // document.write("You will stay on a house boat.");
    } else {
        answer2 = "You will stay with friends and family.";
        // document.write("You will stay with friends and family.");
    }
    console.log(answer);
    return answer2;
    // console.log(roll6);
}

// roll6Sided();


function roll8Sided() {
    var roll8 = (Math.round(Math.random() * (8 - 1) + 1));
    if (roll8 === 1) {
        console.log("You will forget your toothbrush.");
        // document.write("You will forget your toothbrush.");
    } else if (roll8 === 2) {
        console.log("You will forget toothpaste.");
        // document.write("You will forget toothpaste.");
    } else if (roll8 === 3) {
        console.log("You will forget  your comb.");
        // document.write("You will forget  your comb.");
    } else if (roll8 === 4) {
        console.log("You will forget soap.");
        // document.write("You will forget soap.");
    } else if (roll8 === 5) {
        console.log("You will forget your underwear.");
        // document.write("You will forget your underwear.");
    } else if (roll8 === 6) {
        console.log("You will forget sunscreen.");
        // document.write("You will forget sunscreen.");
    } else if (roll8 === 7) {
        console.log("You will forget bug spray.");
        // document.write("You will forget bug spray.");
    } else {
        console.log("You will forget some of your luggage.");
        // document.write("You will forget some of your luggage.");

        // console.log(roll8);
    }
}

// roll8Sided();


function roll10Sided() {
    var roll10 = (Math.round(Math.random() * (10 - 1) + 1));
    switch (roll10) {
        case 1:
            console.log("You will eat home cooking tonight.");
            // document.write("You will eat home cooking tonight.");
            break;
        case 2:
            console.log("You will eat southern food tonight.");
            // document.write("You will eat southern food tonight.");
            break;
        case 3:
            console.log("You will eat Mexican tonight.");
            // document.write("You will eat Mexican tonight.");
            break;
        case 4:
            console.log("You will eat Mexican food tonight.");
            // document.write("You will eat Mexican food tonight.");
            break;
        case 5:
            console.log("You will have French cuisine tonight.");
            // document.write("You will have French cuisine tonight.");
            break;
        case 6:
            console.log("You will have Greek food tonight.");
            // document.write("You will have Greek food tonight.");
            break;
        case 7:
            console.log("You will eat Persian food tonight.");
            // document.write("You will eat Persian food tonight.");
            break;
        case 8:
            console.log("You will eat Chinese food tonight.");
            // document.write("You will eat Chinese food tonight.");
            break;
        case 9:
            console.log("You will eat German food tonight.");
            // document.write("You will eat German food tonight.");
            break;
        default:
            console.log("You are having Japanese food tonight.");
            // document.write("You are having Japanese food tonight.");
            //     // console.log(roll10);
    }
}

// roll10Sided();


function roll12Sided() {
    var roll12 = (Math.round(Math.random() * (12 - 1) + 1));
    switch (roll12) {
        case 1:
            console.log("Your primary mode of transportation will be walking.");
            // document.write("Your primary mode of transportation will be walking.");
            break;
        case 2:
            console.log("You will do a lot of driving on your trip.");
            // document.write("You will do a lot of driving on your trip.");
            break;
        case 3:
            console.log("You'll primarily paddle in your canoe while on vacation.");
            // document.write("You'll primarily paddle in your canoe while on vacation.");
            break;
        case 4:
            console.log("You're going to spend a lot of time in your kayak.");
            // document.write("You're going to spend a lot of time in your kayak.");
            break;
        case 5:
            console.log("You will use the local bus system a lot.");
            // document.write("You will use the local bus system a lot.");
            break;
        case 6:
            console.log("You're going to ride the train a lot.");
            // document.write("You're going to ride the train a lot.");
            break;
        case 7:
            console.log("You will ride a horse to get around.");
            // document.write("You will ride a horse to get around.");
            break;
        case 8:
            console.log("Do you know how to ride a camel? You will learn and use it as your primary mode of transportation.");
            // document.write("Do you know how to ride a camel? You will learn and use it as your primary mode of transportation.");
            break;
        case 9:
            console.log("You're going to ride a donkey around your destination.");
            // document.write("You're going to ride a donkey around your destination.");
            break;
        case 10:
            console.log("You're gonna bike your way around your destination.");
            // document.write("You're gonna bike your way around your destination.");
            break;
        case 11:
            console.log("You'll be zooming around on a scooter during this trip.");
            // document.write("You'll be zooming around on a scooter during this trip.");
            break;
        default:
            console.log("Are you in India? Because you're going to b taking rickshaws a lot.");
            // document.write("Are you in India? Because you're going to b taking rickshaws a lot.");
    }
    // console.log(roll12);
}

// roll12Sided();


function roll20Sided() {
    var roll20 = (Math.round(Math.random() * (20 - 1) + 1));
    switch (roll20) {
        case 1:
            console.log("You're going to the carnival today!");
            // document.write("You're going to the carnival today!");
            break;
        case 2:
            console.log("You're going to the zoo today!");
            // document.write("You're going to the zoo today!");
            break;
        case 3:
            console.log("You're going swimming today!");
            // document.write("You're going swimming today!");
            break;
        case 4:
            console.log("You're going to enjoy some time on the water in a boat today!");
            // document.write("You're going to enjoy some time on the water in a boat today!");
            break;
        case 5:
            console.log("You're going to take a hike today!");
            // document.write("You're going to take a hike today!");
            break;
        case 6:
            console.log("You're going fishing today!");
            // document.write("You're going fishing today!");
            break;
        case 7:
            console.log("You're going to a water park today!");
            // document.write("You're going to a water park today!");
            break;
        case 8:
            console.log("You're going to visit the casino today!");
            // document.write("You're going to visit the casino today!");
            break;
        case 9:
            console.log("You're visiting the racetrack today!");
            // document.write("You're visiting the racetrack today!");
            break;
        case 10:
            console.log("You're going to watch the sunset tonight!");
            // document.write("You're going to watch the sunset tonight!");
            break;
        case 11:
            console.log("You're going to a concert tonight!");
            // document.write("You're going to a concert tonight!");
            break;
        case 12:
            console.log("You will watch a play tonight! Perhaps something by Tennessee Williams?");
            // document.write("You will watch a play tonight! Perhaps something by Tennessee Williams?");
            break;
        case 13:
            console.log("What looks good at the movie theater? Pick something good because that's tonight's entertainment!");
            // document.write("What looks good at the movie theater? Pick something good because that's tonight's entertainment!");
            break;
        case 14:
            console.log("What's the local history like? That's what you'll learn today when you visit the historical monuments nearby.");
            // document.write("What's the local history like? That's what you'll learn today when you visit the historical monuments nearby.");
        case 15:
            console.log("What language do the locals speak? Looks like you're going to learn it today. What's that? They speak your language? I guess you're signing up for another language class.");
            // document.write("What language do the locals speak? Looks like you're going to learn it today. What's that? They speak your language? I guess you're signing up for another language class.");
            break;
        case 16:
            console.log("Are you keen on saving the environment? You'll enjoy volunteering for the local conservation organization.");
            // document.write("Are you keen on saving the environment? You'll enjoy volunteering for the local conservation organization.");
            break;
        case 17:
            console.log("Fancy yourself a humanitarian? Great, you'll volunteer for the local humanitarian organization.");
            // document.write("Fancy yourself a humanitarian? Great, you'll volunteer for the local humanitarian organization.");
            break;
        case 18:
            console.log("Ever dreamed of a safari? You're going to take one today - make sure to bring water!");
            // document.write("Ever dreamed of a safari? You're going to take one today - make sure to bring water!");
            break;
        case 19:
            console.log("You're gonna hit the shops for souvenirs. Don't spend all your cash!");
            // document.write("You're gonna hit the shops for souvenirs. Don't spend all your cash!");
            break;
        default:
            console.log("Like telling stories? Better get your thinking cap on because you're having a campfire tonight!");
            // document.write("Like telling stories? Better get your thinking cap on because you're having a campfire tonight!");
    }
    // console.log(roll20);
}

// roll20Sided();