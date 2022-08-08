// store data in local storage
localStorage.setItem('name','mario');
localStorage.setItem('age',15);

//getting data from local storage

let myAge = localStorage.getItem('age');
let myName = localStorage.getItem('name');

console.log(myName,myAge);

// updating data in local storage

localStorage.age = 17;
localStorage.name = 'pooja';

console.log(localStorage.age, localStorage.name)

//deleting items in local storage

localStorage.removeItem('age'); // to remove 1 item

localStorage.clear();

// it will clear total local storage


//stringyfying and data conversion in JSON strings and parsying or converting it back into original format

let array = [{name: 'robust'},{age: '21'},{height: '175cm'},{staus: 'single but in love with imagination'}];

let convert = JSON.stringify(array);
console.log(convert);

localStorage.setItem('myData',`${convert}`);

let storeData = localStorage.getItem('myData');

console.log(JSON.parse(storeData));
