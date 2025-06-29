console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i<=count; i+=2){
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if (userName === undefined || age === undefined) {
        return undefined;
    }
    let aboveSixteen = `Congrats ${userName}, you can drive`
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}

function quadrantFinder (x, y) {
    if (x > 0) {
        if (y > 0) {
            console.log(`Point (${x}, ${y}) is in the 1st quadrant`)
        } else {
            console.log(`Point (${x}, ${y}) is in the 4th quadrant`)
        }
    } else {
        if (y > 0) {
            console.log(`Point (${x}, ${y}) is in the 2nd quadrant`)
        } else {
            console.log(`Point (${x}, ${y}) is in the 3rd quadrant`)
        }
    }
}

function triangleType (s1, s2, s3) {
    let org = [s1, s2, s3].sort()
    let x = org[0]
    let y = org[1]
    let z = org[2]
    if (x+y <= z) {
        console.log("Invalid Triangle");
    }  else if (x == y && y == z) {
        console.log("Equilateral Triangle");
    } else if (x==y || z==y) {
        console.log("Isosceles Triangle");
    } else {
        console.log("Scalene Triangle");
    }
}