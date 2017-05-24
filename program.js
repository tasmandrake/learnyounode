// 1
// console.log("HELLO WORLD");

// 2
// var sum = 0;
// for (let i = 0; i < process.argv.length; i++) {
//   if (Number(process.argv[i])) {
//     sum += Number(process.argv[i])
//   }
// }
// console.log(sum);

// 3
// const fs = require('fs');
// const file = fs.readFileSync(process.argv[2]);
// console.log(file.toString().split('\n').length - 1);

// 4
// const fs = require('fs');
// fs.readFile(process.argv[2], (err, data) => {
//   if (err) {
//     console.log('Error: ', err);
//   }
//   const breaks = data.toString().split('\n').length - 1;
//   console.log(breaks);
// });

// 5
// const fs = require('fs');
// const path = require('path');
// const extension = '.' + process.argv[3];
// fs.readdir(process.argv[2], (err, list) => {
//   const arr = list.filter(element => path.extname(element) === extension);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// });

// 6
// const myModule = require('./myModule.js');
// function callback(err, list) {
//   if(err) {
//     return console.log('Error: ', err);
//   }
//   for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
//   }
// }
// myModule(process.argv[2], process.argv[3], callback);

// 7
// const http = require('http');
//
// const url = process.argv[2];
//
// http.get(url, response => {
//   response.setEncoding('utf8')
//   response.on('data', data => {
//     console.log(data);
//   });
// });

// 8a
// const http = require('http');
//
// const url = process.argv[2];
//
// http.get(url, response => {
//   const dataArr = [];
//   response.setEncoding('utf8')
//   response.on('data', data => {
//     dataArr.push(data);
//   });
//   response.on('end', () => {
//     const dataStr = dataArr.join('');
//     console.log(dataStr.length);
//     console.log(dataStr);
//   });
// });
//
// 8b
// const http = require('http');
// const bl = require('bl');
//
// const url = process.argv[2];
//
// http.get(url, response => {
//   response.pipe(bl((error, data) => {
//     if (error) {
//       return console.error(error);
//     }
//     data = String(data);
//     console.log(data.length);
//     console.log(data);
//   }));
// });

// 9
const http = require('http');
const bl = require('bl');

const urls = [process.argv[2], process.argv[3], process.argv[4]];

http.get(urls, response)









//
