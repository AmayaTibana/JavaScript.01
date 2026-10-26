let age = 17;
let hasParentConset = true;
let minimumAge = 18;

let elegible = age >= minimumAge || (age >= 16 && hasParentConset);

console.log(elegible);