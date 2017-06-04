var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

// color is an object 
// example of a color object {color: 'red', flavor: 'berry'}
// colors is an array of color objects
// example of  colors [{color: 'blue', flavor: 'bright'}, {color: 'yellow', flavor: 'pepper'}]

var colors = [
	{
		id: '1', 
		color: 'green', 
		flavor: 'spicy'
	}
]

app.get('/colors', (req, res) => {
	res.json(colors)
})

app.post('/colors', (req, res) => {
	const color = req.body.color
	const flavor = req.body.flavor
	const id = colors.length + 1
	const newColor = {
		id: id, 
		color: color, 
		flavor: flavor
	}
	colors.push(newColor)
	res.json(colors)
})

app.listen(8080)


