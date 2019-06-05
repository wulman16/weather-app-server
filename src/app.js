/* eslint-disable no-undef */
const path = require(`path`);
const express = require(`express`);
const hbs = require(`hbs`);
const geocode = require(`./utils/geocode`);
const forecast = require(`./utils/weather`);

// Handle API keys securely
require(`dotenv`).config();
DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
MAPBOX_API_KEY = process.env.MAPBOX_API_KEY;

const app = express();
const port = process.env.PORT || 3000;
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
    title: `Weather`,
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
  if (!req.query.location) {
    return res.send({
      error: `Location must be provided!`
    });
  }

  geocode(req.query.location, (error, geoData) => {
    if (error) {
      return res.send({ error });
    }

    forecast(geoData, (error, weatherData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        location: geoData.placeName,
        forecast: weatherData,
        address: req.query.location
      });
    });
  });
});

app.get(`/help/*`, (req, res) => {
  res.render(`404`, {
    title: 404,
    name: `Will Ulman`,
    message: `Help article not found!`
  });
});

app.get(`*`, (req, res) => {
  res.render(`404`, {
    title: 404,
    name: `Will Ulman`,
    message: `Page not found :(`
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
