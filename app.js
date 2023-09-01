let app = require("express");
let express = app();

express.get('/', (req, res) => {
  res.send('Hello World!')
})

express.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})