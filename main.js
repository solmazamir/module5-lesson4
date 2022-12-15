
const express = require('express');
const app = express();
const arr=[
{id:"1",name:"book",amount:"20",price:"0.1"},
{id:"2",name:"water",amount:"10",price:"0.5"},
{id:"3",name:"apple",amount:"21",price:"10"},
{id:"4",name:"pencil",amount:"12",price:"1.50"},
{id:"5",name:"pen",amount:"13",price:"10.3"},
{id:"6",name:"notebook",amount:"36",price:"10.6"},
{id:"7",name:"rubber",amount:"44",price:"1.2"},
{id:"8",name:"ruler",amount:"5",price:"15"},
{id:"9",name:"cable",amount:"7",price:"36"},
{id:"10",name:"powerbank",amount:"30",price:"1"}
]
console.log(arr)
  app.get('/prod/:id', function (req, res) {
    res.send(JSON.stringify(arr.find((user) => user.id == req.params.id)))
  });
  app.get('/prod', function (req, res) {
    res.send(JSON.stringify(arr))
  });


app.listen(3005, function () {
  console.log('Example app listening on port 3005!');
}); 
   