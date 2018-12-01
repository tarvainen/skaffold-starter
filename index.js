const app = require('express')();

app.get('/', (req, res) => res.json({ msg: 'Hello from Hello App!' }));

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }

  console.log('Listening at http://localhost:3000');
});
