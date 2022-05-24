// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruits = [{name: 'orange', color: 'orange', pricePerKg: "120"},
{name: 'mango', color: 'green', pricePerKg: "250"},
{name: 'apple', color: 'red', pricePerKg: "200"}]

const fruitsMap = new Map();

const buildMap = () => {
    for(let i=0;i<fruits.length;i+1){
        fruitsMap.set(fruits[i].name,fruits[i]);
    }
}

buildMap();
console.log(fruitsMap.get('orange'));
console.log(fruitsMap.get('mango'));
console.log(fruitsMap.get('apple'));