const express = require("express");
const cors = require("cors");
var faker = require("faker");
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

var faker = require("faker");
const { application } = require("express");

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard();

class User {
  constructor() {
    this._id = faker.random.uuid();
    this.firstName = "Mike";
    this.lastName = faker.name.lastName();
  }
}

class Company {
  constructor() {
    this._id = faker.random.uuid();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetName(),
      city: faker.address.city(),
    };
  }
}

app.get("/api/greeting", (req, res) => {
  res.json({ message: "hello world of apis" });
});

app.get("/api/users/new", (req, res) => {
  let user1 = new User();
  console.log(user1);
  res.json({ result: user1 });
});

app.get("/api/user/company", (req, res) => {
  let user1 = new User();
  let company1 = new Company();
  res.json({ user: user1, company: company1 });
});

let user1 = new User();
console.log(user1.firstName);

let company1 = new Company();
console.log;

// application.get("/api/greeting", (req, res) => {
//   let user1 = new User(console.log(user1));
//   res.json({ message: "hello world of apis" });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
