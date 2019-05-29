const path = require(`path`);
const express = require(`express`);

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, `../public`);
const viewsPath = path.join(__dirname, `../templates`);

// Set up Handlebars engine and views location
app.set(`view engine`, `hbs`);
app.set(`views`, viewsPath);

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
