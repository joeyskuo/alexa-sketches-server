var express = require('express');
var app = express();
var myVar;
var counter = 0;

var sketch = {
	word: "dog",
	count: 0
};

app.set('port', (process.env.PORT || 5000));

myFunction();


app.get('/', function(req, res) {
  res.send(sketch);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




function myFunction() {
    myVar = setInterval(alertFunc, 5000);
}

function alertFunc() {
    sketch.count++;
    	if (sketch.count%2 == 0) {
    		sketch.word = "cat";
    	} else {
    		sketch.word = "dog";
    	}
}