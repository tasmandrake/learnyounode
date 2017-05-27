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
// const http = require('http');
// const bl = require('bl');
//
// const urls = [process.argv[2], process.argv[3], process.argv[4]];
// const dataArr = [];
// let count = 0;
//
// for (let i = 0; i < urls.length; i ++) {
//   http.get(urls[i], (response) => {
//     response.pipe(bl((error, data) => {
//       if (error) {
//         return console.error(error);
//       }
//       dataArr[i] = (String(data));
//       count++;
//       if (count === 3) {
//         for (let i = 0; i < dataArr.length; i++) {
//           console.log(dataArr[i]);
//         }
//       }
//     }));
//   });
// }


// 10
// const net = require('net');
// const strftime = require('strftime');
//
// const port = process.argv[2];
// const server = net.createServer(socket => {
//   const strftimeMDT = strftime.timezone('-0600');
//   socket.end(strftimeMDT('%F %R') + '\n');
// });
//
// server.listen(port);


// 11
// const http = require('http');
// const fs = require('fs');
//
// const filePath = process.argv[3];
// const server = http.createServer((req, res) => {
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       return console.error(err);
//     }
//     res.end(data);
//   });
// });
// server.listen(process.argv[2]);
//
// 11 answer
// const http = require('http');
// const fs = require('fs');
//
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' });
//   fs.createReadStream(process.argv[3]).pipe(res);
// });
// server.listen(Number(process.argv[2]));


// 12
// const http = require('http');
// const map = require('through2-map');
//
// const port = process.argv[2];
//
// const server = http.createServer((req, res) => {
//   req.pipe(map(chunk => String(chunk).toUpperCase())).pipe(res);
// });
//
// server.listen(port);


13
const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const urlObj = url.parse(req.url);
  const query = urlObj.query;
  const path = urlObj.pathname;
  const method = req.method;
  if (path === '/api/parsetime' && method === 'GET') {
    res.end(parseTime(query));
  } else if (path === '/api/unixtime' && method === 'GET') {
    res.end(unixTime(query));
  } else {
    res.writeHead(404, {'Content-Type': 'plain/text'}).end();
  }
});


function parseTime(query) {
  const time = query.slice(15, query.length - 5).split(':');
  console.log(time);
  const timeObj =  {
    'hour': Number(time[0]) - 6,
    'minute': Number(time[1]),
    'second': Number(time[2]),
  };
  return JSON.stringify(timeObj);
}

function unixTime(query) {
  const date = {
    unixtime: Date.parse(query.slice(4, query.length - 1)),
  }
  return JSON.stringify(date);

}

server.listen(port);
