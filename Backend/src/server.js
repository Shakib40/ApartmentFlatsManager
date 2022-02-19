const connect = require('./configs/db')
const app = require('./index')

app.listen(4500,  (req, res) => {
  connect()
  console.log('Listening on PORT 4500')
})