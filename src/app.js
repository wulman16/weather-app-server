const path = require(`path`);
const express = require(`express`);

const app = express();
const publicDirectoryPath = path.join(__dirname, `../public`);

app.set(`view engine`, `hbs`);
app.use(express.static(publicDirectoryPath));

app.get(``, (req, res) => {
  res.render(`index`, {
    title: `Weather App`,
    name: `Will Ulman`
  });
});

app.get(`/about`, (req, res) => {
  res.render(`about`, {
    title: `About`,
    name: `Will Ulman`
  });
});

app.get(`/help`, (req, res) => {
  res.render(`help`, {
    message: `Help page`
  });
});

app.get(`/weather`, (req, res) => {
  res.send({
    forecast: `Rain!`,
    location: `Atlanta`
  });
});

app.listen(3002, () => {
  console.log(`Server is up on port 3002!`);
});
