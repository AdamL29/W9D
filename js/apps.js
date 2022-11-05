let userNames = [`Timothy`, `Aaron`, `Denise`, `Jacqueline`, `Blake`, `Sarah`, `John`, `Adam`, `Chris`, `Rebecca`];
let userAges = [18, 17, 16, 18, 19, 16, 17, 31, 37, 25];

let counter = 0;
while (counter < userAges.length) {
    if (userAges[counter] <= 18) {
        console.log(userNames[counter]);
    }
    counter = counter + 1;    
}

for (let counter = 0; counter < userAges.length; counter++) {
    if (userAges[counter] < 18) {
        console.log(userNames[counter]);
    }
}