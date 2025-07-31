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
    // Added origin support
    if (x === 0 && y === 0) {
        console.log(`Point (${x}, ${y}) is on the origin`)
    } else if (x === 0) {
        console.log(`Point (${x}, ${y}) is on the x axis`)
    } else if (y === 0) {
        console.log(`Point (${x}, ${y}) is on the y axis`)
    } else if (x > 0) {
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
    let org = [s1, s2, s3].sort((a, b) => a - b);
    let x = org[0]
    let y = org[1]
    let z = org[2]
    if (x+y <= z) {
        console.log("Invalid Triangle");
    } else if (x == z) {
        console.log("Equilateral Triangle");
    } else if (x===y || z===y) {
        console.log("Isosceles Triangle");
    } else {
        console.log("Scalene Triangle");
    }
}


function dataPlan (planLimit, day, usage) {
    console.log(`
        ${day} days used, ${30-day} days remaining
        Average daily use: ${usage/day} GB/day
        `);
        if ((usage*30)/day > planLimit) {
        console.log(`
            You are EXCEEDING your average daily use (${planLimit/30} GB/day),
            continuing this high usage, you'll exceed your data plan by
            ${((usage*30)/day)-planLimit} GB.
            To stay below your data plan, use no more than ${(planLimit-usage)/(30-day)} GB/day.
        `);
        } else {
            console.log("You are on track to meet or be under your limit");
        }
}