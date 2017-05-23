// console.log("HELLO WORLD");

// var sum = 0;
// for (let i = 0; i < process.argv.length; i++) {
//   if (Number(process.argv[i])) {
//     sum += Number(process.argv[i])
//   }
// }
// console.log(sum);

// const fs = require('fs');
// const file = fs.readFileSync(process.argv[2]);
// console.log(file.toString().split('\n').length - 1);

// const fs = require('fs');
// fs.readFile(process.argv[2], (err, data) => {
//   if (err) {
//     console.log('Error: ', err);
//   }
//   const breaks = data.toString().split('\n').length - 1;
//   console.log(breaks);
// });

// const fs = require('fs');
// const path = require('path');
// const extension = '.' + process.argv[3];
// fs.readdir(process.argv[2], (err, list) => {
//   const arr = list.filter(element => path.extname(element) === extension);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// });
function callback(err, list, ext) {
  if(err) {
    return console.log('Error: ', err);
  }
  const path = require('path');
  const arr = list.filter(element => path.extname(element) === '.' + ext);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myModule = require('./myModule.js');
myModule(process.argv[2], process.argv[3], callback);
