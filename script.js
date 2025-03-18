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

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

const filteredNumbers = numbers.filter(num => num > 2);
console.log("Filtered Numbers:", filteredNumbers);

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `Car: ${this.year} ${this.make} ${this.model}`;
    }
}


const car1 = new Car("Chevrolet", "Camaro", 2021);
const car2 = new Car("Tesla", "Model 3", 2023);
const car3 = new Car("BMW", "X5", 2019);

console.log(car1.getCarInfo()); 
console.log(car2.getCarInfo()); 
console.log(car3.getCarInfo()); 


const user = {
    name: "Stanislav",
    email: "stanosta@gmail.com",
    address: {
        street: "Karhu 45",
        city: "Vaasa",
    }
};

const { name, email, address: { street, city, zip } } = user;
console.log(`Name: ${name}`);
console.log(`Email: ${email}`);
console.log(`Address: ${street}, ${city}, ${zip}`);

const updatedUser = { ...user, email: "stanosta.new@gmail.com" };
console.log("Updated User:", updatedUser);

const inputField = document.getElementById('userInput');
const displayButton = document.getElementById('displayButton');
const resultDiv = document.getElementById('result');


displayButton.addEventListener('click', () => {
    const userInput = inputField.value; 
    resultDiv.textContent = `You typed: ${userInput}`; 

});