// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const generateFxword = require('./generate_fxword')
const hbshelpers = require("handlebars-helpers")
const multihelpers = hbshelpers()

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: multihelpers }))
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
  const target = req.body.target
  const generatedResult = generateFxword(target)
  res.render('index', { result: generatedResult, target: target })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})