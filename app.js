const express = require("express");
const app = express();

const { list, find } = require('./postBank')

// const morgan = require("morgan");
const volleyball = require('volleyball');

// app.use(morgan('dev'));
app.use(volleyball);

app.get("/", (req, res) => {
  const dataArray = list()
  const titleAndAuthorArray = dataArray.map((post) => {
    let title = post.title;
    let name = post.name;
    return `${title} by ${name}`
  })
  .join(' ')
  
  res.send(titleAndAuthorArray)

})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
