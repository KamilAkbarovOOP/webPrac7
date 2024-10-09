//Task 1
console.log(`Task 1__________________________________\n`);

const celsiusToFahrenheit = (c) => {
 return `${c}°C is ${(9 * c + (32 * 5)) / 5}°F`;
}


const fahrenheitToCelsius = (f) => {
    return `${f}°F is ${(5 * (f - 32)) / 9}°C`;
}

console.log(celsiusToFahrenheit(60));
console.log(fahrenheitToCelsius(45));





//Task 2
console.log("\n\nTask 2__________________________________\n");

const date = new Date();
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let hours;
if(date.getHours() >= 12){
    hours = `${date.getHours() - 12} PM`
}
else{
    hours = `${date.getHours()} AM`
}

console.log("Today is :", days[date.getDay()]);
console.log("Current time is:", hours, date.getHours(), ":", date.getMinutes(), ":", date.getSeconds());





//Task 3
console.log("\n\nTask 3__________________________________\n");

const isLeapYear = (year) => {
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        return `${year} is leap year`;
    }
    return `${year} is not leap year`;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2016));
console.log(isLeapYear(1800));





//Task 4
console.log("\n\nTask 4__________________________________\n");

const allYears = [];
for(let i = 2014; i <= 2050; i++){
    let dates = new Date(i, 0, 1);
    if(dates.getDay() === 0){
        allYears.push(i);
    }
}

console.log(allYears.length, "times");

for(let i = 0; i < allYears.length; i++){
    console.log("1st January is being a Sunday", allYears[i]);
}





//Task 5
console.log("\n\nTask 5__________________________________\n");

const takeLetter = (word, position) => {
    return word.slice(0, position) + word.slice(position + 1);
}

console.log(takeLetter("python", 0));
console.log(takeLetter("python", 3));
console.log(takeLetter("python", 5));
