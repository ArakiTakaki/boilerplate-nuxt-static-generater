import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log(req);
  res.send('HelloWorld');
});

export default {
  path: '/api',
  handler: app
};
