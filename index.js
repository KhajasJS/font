const express = require('express')

const app = express()
app.use(express.static('docs'))

const port = 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
