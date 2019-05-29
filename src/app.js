const path = require(`path`);
const express = require(`express`);
const hbs = require(`hbs`);

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, `../public`);
const viewsPath = path.join(__dirname, `../templates/views`);
const partialsPath = path.join(__dirname, `../templates/partials`);

// Set up Handlebars engine and views location
app.set(`view engine`, `hbs`);
app.set(`views`, viewsPath);
hbs.registerPartials(partialsPath);

// Set up static directory to serve
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
    message: `Help page`,
    title: `Help`,
    name: `Will Ulman`
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
