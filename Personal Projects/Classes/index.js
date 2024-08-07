// class User {
//    constructor(userEmail, userName) {
//       this.userEmail = userEmail;
//       this.userName = userName;
//    }
//    login() {
//       console.log(this.userEmail, " has logged in.");
//    }
//    logout() {
//       console.log(this.userEmail, " has logged out.");
//    }
// }

// class Admin extends User {
//     deleteUser(user) {
//         userList = userList.filter(u => {
//             return u.userEmail != user.userEmail;
//         })

//     }
// }
// let userOne = new User("ben.exe", "Ben");
// let userTwo = new User("jike.exe", "Ejike");
// let userThree = new User("uduogu.exe", "Uduogu");
// let admin = new Admin("ceo.exe", "ceo");

// let userList = [userOne, userTwo, userThree];

// admin.deleteUser(userThree);

// console.log(userList);


class User {
   constructor(userEmail, userName) {
      this.userEmail = userEmail;
      this.userName = userName;
   }
   login() {
      console.log(this.userEmail, " has logged in.");
   }
   logout() {
      console.log(this.userEmail, " has logged out.");  // Fixed the message
   }
}

class Admin extends User {
    constructor(userEmail, userName) {
        super(userEmail, userName);
    }
    // If you don't include 'super()' in the 'Admin' constructor,
    // you'll get an error because you need to call the parent ...
    // ... class constructor before you can use 'this' in the derived class constructor.
    
    deleteUser(userList, user) {
        return userList.filter(u => u.userEmail !== user.userEmail); // Fixed property name
    }
}

let userOne = new User("ben.exe", "Ben");
let userTwo = new User("jike.exe", "Ejike");
let userThree = new User("uduogu.exe", "Uduogu");
let admin = new Admin("ceo.exe", "ceo");

let userList = [userOne, userTwo, userThree];

// Correct usage of deleteUser
userList = admin.deleteUser(userList, userThree);

console.log(userList);

console.log(admin.userName)

