const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const myRoutes = require('./routes/myRoutes');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', myRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});