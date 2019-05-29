const path = require(`path`)
const express = require(`express`)

const publicDirectoryPath = path.join(__dirname, `../public`)

const app = express()

app.use(express.static(publicDirectoryPath))

app.get(``, (req, res) => {
  res.send(`<h1>Weather</h1>`)
})

app.get(`/weather`, (req, res) => {
  res.send({
    forecast: `Rain!`,
    location: `Atlanta`
  })
})

app.listen(3002, () => {
  console.log(`Server is up on port 3002!`)
})
