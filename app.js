console.log("!--------------------------------!");
const {users, groups} = require('./modules/users');
console.log("!--------------------------------!");
const { themes } = require('./modules/themes');
console.log("Themese", themes) // RETURNING MODFIED ARRAY!!!!!!!!!!!!!!
console.log("!--------------------------------!");

// The require statment caches its result!!! so initalization code will run only once!! 
// That is why themes is printed only once! because it's initalization code ran only once! 