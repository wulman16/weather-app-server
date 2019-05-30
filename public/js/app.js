fetch(`http://localhost:3002/weather/?location=atlanta`)
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
