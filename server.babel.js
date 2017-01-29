
import express from 'express';

const app = express();

app.use('/', express.static('public'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
  next();
});

app.listen(process.env.PORT || 3000);
