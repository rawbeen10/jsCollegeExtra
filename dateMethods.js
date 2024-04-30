const time = new Date();

console.log(time.getDate()); // Day of the month
console.log(time.getDay()); // Day of the week
console.log(time.getFullYear()); // Year
console.log(time.getMonth()); // Month (0-11)
console.log(time.getHours()); // Hours (0-23)
console.log(time.getMinutes()); // Minutes (0-59)
console.log(time.getSeconds()); // Seconds (0-59)
console.log(time.getMilliseconds()); // Milliseconds (0-999)
console.log(time.getTime()); // Milliseconds since the Unix Epoch
console.log(time.toISOString()); // Date as a string in ISO format
console.log(time.toString()); // Date as a string
console.log(time.toLocaleDateString()); // Date as a string using locale conventions
console.log(time.toLocaleTimeString()); // Time as a string using locale conventions
console.log(time.toLocaleString()); // Date and time as a string using locale conventions
