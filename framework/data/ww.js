const { faker } = require('@faker-js/faker');

faker.locale = "ru";


let weekday = faker.date.weekday()
console.log(weekday);