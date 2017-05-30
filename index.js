var express = require('express');
var app = express();
var myVar;
var counter = 0;

var sketch = {
	count: 0
};

app.set('port', (process.env.PORT || 5000));

myFunction();


app.get('/', function(req, res) {
  res.send(''+sketch.count);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




function myFunction() {
    myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
    sketch.count++;
}