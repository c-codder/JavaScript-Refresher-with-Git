function calculateArea(radius) {
    const PI = 3.14159; 
    const area = PI * radius * radius; 
    console.log(`The area of a circle with radius ${radius} is: ${area}`);
}

function compareNumbers(a, b) {
    if (a > b) {
        console.log(`${a} is larger than ${b}`);
    } else if (b > a) {
        console.log(`${b} is larger than ${a}`);
    } else {
        console.log(`${a} and ${b} are equal`);
    }
}

calculateArea(3); 
calculateArea(5); 

compareNumbers(5, 6); 
compareNumbers(6, 5); 
compareNumbers(15, 15); 