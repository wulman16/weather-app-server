/* eslint-disable no-undef */
const request = require(`request`);

const weather = ({ lat, lng }, callback) => {
  const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${lng}`;
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback(`Unable to connect to weather service!`);
    } else if (body.error) {
      callback(`Unable to find location! Try another search.`);
    } else {
      const temp = body.currently.temperature;
      const precipChance = body.currently.precipProbability;
      const precip = temp >= 32 ? `rain` : `snow`;
      const summary = body.daily.data[0].summary;
      callback(
        undefined,
        `${summary} It is currently ${temp} degrees outside. There is a ${precipChance}% chance of ${precip}.`
      );
    }
  });
};

module.exports = weather;
