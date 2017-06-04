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
var id = 1;
var colors = [
  {
    id: 1, 
    color: 'green'
  }
]
function removeColor(id){
  var length = colors.length
  for(var i = 0; i<length; i++){
    if(id == colors[i].id){
      colors.splice(i, 1)
      return
    }
  }
}
app.get('/colors', (req, res) => {
  res.json(colors)
})

app.post('/colors', (req, res) => {
  const color = req.body.color
  id++
  const newColor = {
    id: id, 
    color: color
  }
  colors.push(newColor)
  res.json(colors)
})

app.delete('/colors/:id', (req, res) => {
  removeColor(req.params.id)
  res.status(201).end()
})

app.listen(8080)


