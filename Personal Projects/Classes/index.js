class User {
   constructor(userEmail, userName) {
      this.userEmail = userEmail;
      this.userName = userName;
   }
   login() {
      console.log(this.userEmail, " has logged in.");
   }
   logout() {
      console.log(this.userEmail, " has logged in.");
   }
}

const userOne = new User("jike.exe", "Ejike");

console.log(userOne.login())