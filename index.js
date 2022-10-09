const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.json({
    'message':'success'
  });
});

app.get('/dev',(req,res)=>{
  res.json({
    'dev':'upkesha'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});