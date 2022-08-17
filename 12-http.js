// const _ = require('lodash');
// const items = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);

var http = require('http')

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write('welcome to out home page');
        res.end();
    }
    if (req.url === '/about') {
        res.write('welcome to our about page');
        res.end();
    }
    res.end('<p>Sorry, this page does not exist</p><a href="/">Go back to the home page</a>');

})
server.listen(4000)