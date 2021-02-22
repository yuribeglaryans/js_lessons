class User {
    // Private files from 2015
    #_username;
    #_email;
  ​
    // Create getter method
    get userName() {
      return this.#_username;
    }
    get userEmail() {
      return this.#_email;
    }
  ​
    // Create setter method
    set userName(newUserName) {
      if (newUserName && newUserName.lenght === 0) {
        throw new Error("Username must be at least 1 char.");
      }
      this.#_username = newUserName;
    }
  ​
    set userEmail(newEmail) {
      if (newEmail && newEmail.lenght === 0) {
        throw new Error("Email must be at least 1 char.");
      }
      this.#_email = newEmail;
    }
  }
  ​
  const userBob = new User();
  ​
  console.log((userBob.userName = "Boby"));
  ​
  console.log((userBob.userEmail = "bob@gmail.com"));