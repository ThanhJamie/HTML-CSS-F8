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

//  42 

// 42.1
// function run(number) {
//     if(number % 3 == 0 && number % 15 != 0 ){     
//        return 'f';
//     }
//     if (number % 5 == 0 && number % 15 != 0){
//        return 8;
//     }
//     if (number % 15 == 0 ){
//         return 'f8';
//     }
    
// }
// 42.2
// 43
// 1.
// function run(a) {
//   return a === "number" ? a : parseInt(a);
// }

// 43


// var topics = [
//     {
//         topic : 'Front-end',
//         courses : [
//             {
//                 id : 1,
//                 title : "HTML ,CSS"
//             },
//             {
//                 id : 2,
//                 title : "Javascript"
//             }
//         ]
//     },
//     {
//         topic : 'Back-end',
//         courses : [
//             {
//                 id : 1,
//                 title : "Php"
//             },
//             {
//                 id : 2,
//                 title : "Node-Js"
//             }
//         ]
//     }
// ]

// var newCourse = topics.reduce(function (course,topic){
//     return course.concat(topic.courses)
// },[])


// // console.log(newCourse);


// var html = newCourse.map(function (course){
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID:${course.id}</p>
//         </div>
//     `
// })

// console.log(html.join(''));


// Array.prototype.reduce2= function(callback,result) {
//     let i = 0
//     if(arguments.length < 2){
//         i = 1
//         result = this[0]
//     }
//     for(;i<this.length; i++){
//         result = callback(result,this[i],i,this);
//     }
//     return result
// }
// const numbers = [1,2,3,4,5]

// const result = numbers.reduce2((total,number) =>{
//     return total + number
// },10)

// console.log(result);

// var headingNode = document.getElementById('heading');

// console.log({ 
//     element: headingNode
// });

// var heading  =  document.querySelector('h1');
// heading.title = 'Học lập trình tại F8'

// console.log(heading.title);

// let f8LinkElement = document.querySelector('a:nth-child(1)')
// let f8ShortLink = f8LinkElement.getAttribute('href')
// document.querySelector('a:nth-child(2)').href = f8ShortLink;
// document.querySelector()


// var boxElement = document.querySelector('.box')

// boxElement.innerHTML = '<h1>Javascript</h1>'

// var boxElement = document.querySelector('.box') 
// Object.assign(boxElement.style, { 
//     fontSize: '2rem', 
//     backgroundColor: '#F05123',
// })

// var boxElement = document.querySelector('.box')

// boxElement.classList.add('red')

// console.log(boxElement.classList.contains('red'));

// setTimeout(() => {
//    boxElement.classList.remove('red') 
// },3000);

// boxElement.addEventListener('')

// var h1Element = document.querySelector('h1');

// h1Element.onclick = function () {
//     console.log(Math.random());
// }

// var inputElement = document.querySelector('input[type="text"]');
// // console.log(inputElement);
// inputElement.onchange = function (e) {
//     console.log(e.target.value);
// }

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function (e) {
//     console.log(e.target.value);
// }

// var aElement = document.links

// // console.log(aElement);

// for(var i = 0; i < aElement.length; i++){
//     aElement[i].onclick = function(e) {
        
//         if (!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//             e.s
//         }
//     }
// }
// document.getElementById()

// let btn = document.getElementById('btn');

// btn.addEventListener('click',function(e){
//     console.log(Math.random());
// })


// var json = '{"name": "Thanh"}, "age": 12';

// console.log(json);

// var a= '"asdsadsad"'

// console.log(JSON.parse(a));

// console.log(JSON.stringify([
//     'javascript', 'js', 'css'
// ]));


// Sync/Async
// setTimeout, setInterval, fetch, XMLHttpRequest


// setTimeout(function () {
//     console.log(1);
// })

// console.log(2);

// var promise = new Promise(
//     function (resolve, reject) {

//         resolve()
// })


// promise
//     .then(function (){
//         console.log('Succesfully');
//     })
//     .catch(function () {
//         console.log('Failure');
//     })
//     .finally(function (){
//         console.log('Done');
//     })


// function sleep(ms){
//     return new Promise(function (resolve, reject) {
       
//     })
// }

var courseAPI = 'http://localhost:3000/courses'

fetch(courseAPI)
    .then(function (response) {
        return response.json()
    })
    .then(function (course) {
        console.log(course);
    })