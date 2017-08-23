// A game that uses at least one 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided dice

// function roll4Sided() {
//     var roll4 = (Math.round(Math.random() * (4 - 1) + 1));
//     if (roll4 === 1) {
//         console.log("You'll be visiting a location by the sea.");
//     } else if (roll4 === 2) {
//         console.log("You're going to a place in the woods.");
//     } else if (roll4 === 3) {
//         console.log("You are going to the city.");
//     } else {
//         console.log("You'll be on a tropical island");
//     }
//     console.log(roll4);
// }

// roll4Sided();

// function roll6Sided() {
//     var roll6 = (Math.round(Math.random() * (6 - 1) + 1));
//     if (roll6 === 1) {
//         console.log("You'll be staying in a hotel.");
//     } else if (roll6 === 2) {
//         console.log("You'll be staying at an all-inclusive resort.");
//     } else if (roll6 === 3) {
//         console.log("You will stay at a cozy bed & breakfast.");
//     } else if (roll6 === 4) {
//         console.log("You're going to be sleeping in a tent.");
//     } else if (roll6 === 5) {
//         console.log("You will stay on a house boat.");
//     } else {
//         console.log("You will stay with friends and family.");
//     }
// console.log(roll6);
// }

// roll6Sided();


// function roll8Sided() {
//     var roll8 = (Math.round(Math.random() * (8 - 1) + 1));
//     if (roll8 === 1) {
//         console.log("You will forget your toothbrush.");
//     } else if (roll8 === 2) {
//         console.log("You will forget toothpaste.");
//     } else if (roll8 === 3) {
//         console.log("You will forget  your comb.");
//     } else if (roll8 === 4) {
//         console.log("You will forget soap.");
//     } else if (roll8 === 5) {
//         console.log("You will forget your underwear.");
//     } else if (roll8 === 6) {
//         console.log("You will forget sunscreen.");
//     } else if (roll8 === 7) {
//         console.log("You will forget bug spray.");
//     } else {
//         console.log("You will forget some of your luggage.");
//     }
// console.log(roll8);
// }

// roll8Sided();


function roll10Sided() {
    var roll10 = (Math.round(Math.random() * (10 - 1) + 1));
    switch (roll10) {
        case 1:
            console.log("You will eat home cooking tonight.");
            break;
        case 2:
            console.log("You will eat southern food tonight.");
            break;
        case 3:
            console.log("You will eat Mexican tonight.");
            break;
        case 4:
            console.log("You will eat Mexican food tonight.");
            break;
        case 5:
            console.log("You will have French cuisine tonight.");
            break;
        case 6:
            console.log("You will have Greek food tonight.");
            break;
        case 7:
            console.log("You will eat Persian food tonight.");
            break;
        case 8:
            console.log("You will eat Chinese food tonight.");
            break;
        case 9:
            console.log("You will eat German food tonight.");
            break;
        default:
            console.log("You are having Japanese food tonight.");
    }
    // console.log(roll10);
}

roll10Sided();

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