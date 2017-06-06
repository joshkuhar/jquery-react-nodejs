var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

var id = 1;
var colors = [
  {
    id: 1, 
    color: 'green'
  }
]
function removeColor(id){
  const length = colors.length
  for(var i = 0; i < length; i++){
    if(id == colors[i].id){
      colors.splice(i,1)
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

app.listen(process.env.PORT || 8080)


