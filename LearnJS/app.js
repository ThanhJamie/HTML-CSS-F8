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

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

var author = new User('Thanh','Dang','Avatar');
author.email = 'Email@thanh.com';
console.log(author);