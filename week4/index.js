// index.js
var bodyParser = require('body-parser'); 
var express = require('express');
var fs = require('fs')
var app = express();
const dataset = [
    [ 5, 2, 4, 3, 2, 5, 4, 2, 3, 3, '신수민' ],
    [ 1, 4, 2, 1, 3, 5, 2, 1, 5, 1, '김민수' ],
    [ 2, 1, 4, 2, 2, 2, 4, 5, 4, 3, '신영수' ],
    [ 4, 1, 1, 4, 2, 5, 2, 3, 5, 4, '김동현' ],
    [ 4, 4, 4, 3, 1, 3, 2, 3, 4, 4, '박민아' ],
    [ 4, 3, 1, 2, 4, 2, 1, 2, 2, 2, '박수민' ],
    [ 1, 1, 5, 2, 2, 5, 5, 1, 5, 3, '이수민' ],
    [ 1, 5, 3, 4, 1, 2, 3, 5, 3, 4, '신민아' ],
    [ 3, 1, 4, 4, 3, 3, 1, 5, 2, 4, '정영우' ],
    [ 5, 3, 1, 4, 5, 2, 4, 4, 2, 2, '장수민' ],
    [ 1, 1, 3, 4, 3, 2, 3, 2, 5, 2, '박동현' ],
    [ 4, 4, 5, 5, 2, 4, 5, 4, 1, 4, '김도연' ],
    [ 2, 1, 4, 1, 1, 3, 5, 4, 3, 5, '박민아' ],
    [ 4, 3, 2, 2, 1, 5, 1, 3, 5, 4, '장영우' ],
    [ 4, 1, 3, 5, 2, 2, 1, 1, 1, 5, '이영우' ],
    [ 5, 2, 5, 2, 2, 5, 5, 3, 5, 1, '한민수' ],
    [ 2, 5, 5, 2, 1, 1, 5, 5, 4, 1, '김동현' ],
    [ 2, 4, 2, 3, 1, 3, 5, 2, 1, 1, '신영수' ],
    [ 4, 5, 2, 1, 2, 2, 1, 5, 3, 2, '박영우' ],
    [ 5, 2, 3, 2, 2, 1, 3, 1, 5, 3, '신도연' ],
    [ 1, 5, 3, 4, 2, 5, 1, 5, 3, 5, '한민수' ],
    [ 5, 1, 5, 2, 3, 5, 2, 1, 3, 2, '박영수' ],
    [ 1, 4, 3, 1, 3, 2, 2, 3, 3, 4, '이수민' ],
    [ 5, 5, 3, 4, 3, 1, 2, 1, 5, 5, '김민아' ],
    [ 5, 4, 2, 1, 1, 2, 1, 1, 3, 2, '장동현' ],
    [ 4, 4, 1, 2, 5, 2, 1, 2, 3, 2, '장민수' ],
    [ 5, 4, 4, 2, 5, 5, 2, 3, 5, 2, '정영우' ],
    [ 1, 2, 4, 1, 2, 2, 2, 3, 1, 2, '박지훈' ],
    [ 3, 1, 3, 2, 1, 1, 5, 1, 4, 3, '정민수' ],
    [ 1, 2, 5, 2, 5, 3, 3, 4, 1, 3, '정도연' ]
  ]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs'); // 1
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    fs.readFile('week4.html', function(error, data){
        res.writeHead(200, { 'Content-Type' : 'text/html'})
        res.end(data);
    })
  })

app.post('/main', function(req,res){ // 3

    let arr = [];

    for (let i = 1; i <= 10; ++i) {
        arr.push(parseInt(req.body[i]));
    }
    arr.push(req.body.user);

    const euclideanDistance = (row1, row2) => {
        let distance = 0.0;
        for (let i = 0; i < row1.length; ++i) {
          distance += (row1[i] - row2[i]) ** 2;
        }
        return Math.sqrt(distance);
      };
      const getNeighbors = (train, test_row, num_neighbors) => {
        let distances = new Array();
        train.forEach((train_row) => {
          let dist = euclideanDistance(test_row, train_row);
          distances.push([dist, train_row[10]]);
        });
        distances.sort((a, b) => a[0] - b[0]);
        let neighbors = new Array();
        for (let i = 0; i < num_neighbors; ++i) {
          neighbors.push(distances[i]);
        }
        return neighbors;
      };
      let row0 = arr.slice(0,-1);
      let neighbors = getNeighbors(dataset, row0, 3)

      ////////////////////////
    res.render('main',{name1 : neighbors[0][1], name2 : neighbors[1][1], name3 : neighbors[2][1]});
});

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});