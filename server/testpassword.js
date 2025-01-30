import bcrypt from "bcrypt";

// Use the **actual** hashed password from your database
const passwordToHash = "lucas920"; // The password you want to hash
const saltRounds = 10; // The number of salt rounds

bcrypt.hash(passwordToHash, saltRounds).then((hashedPassword) => {
  console.log("Hashed Password:", hashedPassword);
});
