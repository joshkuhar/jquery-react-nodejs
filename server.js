var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

var id = 1;
var colors = []
function addColor(color){
  id++
  const newColor = {
    id: id,
    color: color
  }
  colors.push(newColor)
}
function removeColor(id){
  for(var i in colors) {
    if(id == colors[i].id){
      colors.splice(i,1)
      return
    }
  }
}

app.get('/colors', (req, res) => {
  // use this to check if the server is running
  res.json({status : 'server is running'})
})

app.post('/colors', (req, res) => {
  addColor(req.body.color)
  res.status(201).json(colors)
})

app.delete('/colors/:id', (req, res) => {
  removeColor(req.params.id)
  res.status(200).end()
})

app.listen(process.env.PORT || 8080);


