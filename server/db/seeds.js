use bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    firstName: "Mikel",
    lastName: "Howarth",
    email: "mikelbrierly@gmail.com",
    status: true
  },
  {
    firstName: "Martin",
    lastName: "Cartledge",
    email: "martinlovesstarwars@gmail.com",
    status: true
  },
  {
    firstName: "Joe",
    lastName: "Landry",
    email: "ifoundjoe@hotmail.com",
    status: false
  }
]);
