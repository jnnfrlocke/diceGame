// A game that uses at least one 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided dice

function roll4Sided() {
    var roll4 = (Math.round(Math.random() * (4 - 1) + 1));
    if (roll4 === 1) {
        console.log("You'll be visiting a location by the sea.");
    } else if (roll4 === 2) {
        console.log("You're going to a place in the woods.");
    } else if (roll4 === 3) {
        console.log("You are going to the city.");
    } else {
        console.log("You'll be on a tropical island");
    }
    console.log(roll4);
}

roll4Sided();

// function roll6Sided() {
//     var roll6 = (Math.round(Math.random() * (6 - 1) + 1));
//     console.log(roll6);
// }

// roll6Sided();

// function roll8Sided() {
//     var roll8 = (Math.round(Math.random() * (8 - 1) + 1));
//     console.log(roll8);
// }

// roll8Sided();

// function roll10Sided() {
//     var roll10 = (Math.round(Math.random() * (10 - 1) + 1));
//     console.log(roll10);
// }

// roll10Sided();

// function roll12Sided() {
//     var roll12 = (Math.round(Math.random() * (12 - 1) + 1));
//     console.log(roll12);
// }

// roll12Sided();

// function roll20Sided() {
//     var roll20 = (Math.round(Math.random() * (20 - 1) + 1));
//     console.log(roll20);
// }

// roll20Sided();