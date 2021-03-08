const app = require('./main');

const { PORT } = process.env;
app.listen(PORT, () =>
  console.log(`✔ server is running at http://localhost:${PORT}/`),
);
