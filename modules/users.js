const users = ["Avinash", "Arun", "Nikhil", "Anish", "Rohit"];
const groups = [{id : '1', members: ["Arun", "Rohit", "Avinash"]}, {id : '2', members: ["Arun", "Nikhil", "Avinash"]}];

module.exports = {
    users,
    groups,
}

const { themes } = require('./themes');
themes.push("Hello ji");

console.log("USERS", themes);