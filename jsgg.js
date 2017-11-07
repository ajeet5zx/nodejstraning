var uri = 'abc.com/?name=ajeet&age=22&sex=male&length=5'
//var queryString = {};
queryString = uri.match("([a-z0-9]*=[a-z0-9]*)+","g");
console.log(queryString);