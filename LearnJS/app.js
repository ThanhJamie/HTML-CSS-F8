// var languages = [1, 2, 3, 4];

// // languages.
// if(languages > 3 ){
//     languages.pop();
// }else{
//     languages.splice(-2,2)
// }
// console.log(languages);

// var a = 1;
// var b = 1;
// console.log(typeof a,b);

// function calculateTriangleArea(a, b) {
//     if (a && b > 0) {
//         return (a * b) / 2;
//     } else {
//         return false;
//     }
// }

// calculateTriangleArea(2, 8);

// var a = "123"
// var b = "222"
// b.includes

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// User.prototype.className = "User";

// var author = new User('Thanh','Dang','Avatar');
// author.email = 'Email@thanh.com';
// console.log(author);


// 41
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// // console.log(month);
// function getCurrentTimestamp() {
//     var timestamp = Math.floor(Date.now() / 1000)
//     return timestamp
// }
// getCurrentTimestamp()


// function getDifferentSeconds (a,b){
//     var a=new Date(a);
//     var b=new Date(b);
//     var getDifferentSeconds=(b.getTime()- a.getTime()) /1000;
//     return getDifferentSeconds ;
//   }