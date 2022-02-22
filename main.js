const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
const insectusEmployees = contacts.filter(cont => cont.company.startsWith("INSECTUS"));
console.log(insectusEmployees);

// //2. an array all of the contacts, with only the name property
const contactNames = contacts.map(cont => {
    return cont.name;
});
console.log(contactNames);

// //3. an array of all of the contacts over the age of 50
const oldContacts = contacts.filter(cont => cont.age > 50);
console.log(oldContacts);

//4. the first ten contacts when alphabetically ordered by name
const firstTen = contacts.sort((a,b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase())).slice(0,10);
console.log(firstTen);

//5. the oldest person's name
let oldestPerson = contacts[0];
contacts.forEach(cont => {
    if (cont.age > oldestPerson.age) {
        oldestPerson = cont;
    }
});
console.log(oldestPerson);

//6. the contact id with the name Isabella Burke
console.log(contacts.find(cont => cont.name === "Isabella Burke").id)

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
const nameSplitArray = contacts.map(cont => {
    const copy = cont;
    [copy.firstName, copy.lastName] = cont.name.split(" ");
    delete copy.name;
    return copy;
})
console.log(nameSplitArray);

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
const arrayWithFriends = contacts.map(cont => {
    cont.friends = cont.friends.map(friendId => contacts.find(x => x.id === friendId));
    return cont;
});
console.log(arrayWithFriends);

//9. the average age of the contacts
const average = contacts.reduce((total, contact) => total + contact.age, 0)/contacts.length;
console.log(average);

//10. the median age of the contacts
const ages = contacts.map(cont => cont.age).sort((a,b) => b - a);
console.log(ages[(ages.length/2) - 1]);