var validator=require('validator')

let validEmail=validator.isEmail('foo@bar.com')
let isEmail=validator.isEmail('foo')
console.log('validEmail',validEmail);
console.log('isEmail',isEmail);
