// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public'))

// body parser 
app.use(express.urlencoded({
  extended: true
}));

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

// routes setting
app.post('/', (req, res) => {
  console.log(req.body)
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})