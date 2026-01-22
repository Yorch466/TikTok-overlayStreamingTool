const users = [
  { name: "Ana", active: true },
  { name: "Luis", active: false },
  { name: "Sofia", active: true },
  { name: "Pedro", active: false }
];

const activeUsers = users.filter(user => user.active === true);

const nameActiveUsers = activeUsers.map(user => user.name);

console.log(nameActiveUsers);