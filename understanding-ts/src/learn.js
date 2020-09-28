// ! Generics
// ? with functions
function generateRandomId(id) {
    return Math.floor(Math.random() * 5) + id;
}
console.log(generateRandomId(1221));
console.log(generateRandomId('asdhbadh'));
