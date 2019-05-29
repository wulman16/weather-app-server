const express = require(`express`)

const app = express()

app.get(``, (req, res) => {
  res.send(`Sup!`)
})

app.get(`/help`, (req, res) => {
  res.send(`Help!`)
})

app.get(`/about`, (req, res) => {
  res.send(`About`)
})

app.get(`/weather`, (req, res) => {
  res.send(`Weather`)
})

app.listen(3002, () => {
  console.log(`Server is up on port 3002!`)
})
