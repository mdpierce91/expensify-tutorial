// const person = {
//     age: 27,
//     location: {
//         city: 'Saanich',
//         temp: 15
//     }
// };
// const { name = 'Anon', age } = person;

// console.log(`${name} ${age}`);

// const {city, temp: temperature} = person.location;
// if (city, temperature){
//     console.log(`Its ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName); 


// const address = ['1299 South Juniper Street', 'Philidelphia', 'Pennsylvania', '19147'];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , med] = item;

console.log(`A medium ${name} costs ${med}`);