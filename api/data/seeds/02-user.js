const bcrypt = require("bcryptjs");
exports.seed = function (knex) {
  const hashed = (data) => bcrypt.hashSync(data, 8);
  return knex("users").insert([
    {

      email: "roman@gmail.com",
      password: hashed("123"),
      first_name: "roman",
      last_name: "harper",
      birthday: "06/17/1985",
      phone: "1-800-523-4343",
      bio: "Looking for a place. Preferably clean and around friendly neighbors.",
    },
    {

      email: "dylan@gmail.com",
      password: hashed("123"),
      first_name: "dylan",
      last_name: "rymizea",
      birthday: "06/17/1985",
      phone: "1-800-433-8343",
      bio: "Looking for a home.",
    },
    {

      email: "daniel@gmail.com",
      password: hashed("123"),
      first_name: "ben",
      last_name: "dover",
      birthday: "05/13/1955",
      phone: "1-800-423-8142",
      bio: "Looking for a friend to live with.",
    },
    {
      password: hashed("123"),
      email: "kyle@gmail.com",
      first_name: "daniel",
      last_name: "kim",
      birthday: "05/13/1955",
      phone: "1-830-123-8142",
      bio: "Looking for a friend to live with. Also, might rent out my place.",
    },
  ]);
};
