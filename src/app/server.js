const app = require('./main');
require('./bootstrap');

app.listen(process.env.PORT, () => {
  console.log('-> backend running on port', process.env.PORT);
});
