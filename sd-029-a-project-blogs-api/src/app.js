const express = require('express');
const { loginRoute, userRoute, categoriesRoute, postRoute } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/', loginRoute);
app.use('/', userRoute);
app.use('/', categoriesRoute);
app.use('/', postRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
