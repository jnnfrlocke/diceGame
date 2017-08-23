// A game that uses at least one 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided dice

function roll4Sided() {
    var roll4 = (Math.round(Math.random() * (4 - 1) + 1));
    console.log(roll4);
}

roll4Sided();

function roll6Sided() {
    var roll6 = (Math.round(Math.random() * (6 - 1) + 1));
    console.log(roll6);
}

roll6Sided();

function roll8Sided() {
    var roll8 = (Math.round(Math.random() * (8 - 1) + 1));
    console.log(roll8);
}

roll8Sided();

function roll10Sided() {
    var roll10 = (Math.round(Math.random() * (10 - 1) + 1));
    console.log(roll10);
}

roll10Sided();