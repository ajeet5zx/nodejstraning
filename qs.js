// http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
// JavaScript regex trick: Parse a query string into an object

var queryString = {};
anchor.href.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) { queryString[$1] = $3; }
);

// Usage
var uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
var queryString = {};
uri.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) { queryString[$1] = $3; }
);
console.log('ID: ' + queryString['product_id']);     // ID: 2140
console.log('Name: ' + queryString['product_name']); // Name: undefined
console.log('Category: ' + queryString['category']); // Category: 4