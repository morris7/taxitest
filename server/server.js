const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express().use('*', cors());
const url = 'https://qa-interview-test.qa.splytech.io/api/drivers';

app.get('/drivers', async (req, res) => {
  const { latitude, longitude, count } = req.query;
  try {
    const drivers = await axios.get(`${url}?latitude=${latitude}&longitude=${longitude}&count=${count}`);
    res
      .status(200)
      .send(drivers.data);
  } catch (err) {
    res.sendStatus(500);
    console.log('500 Error');
  }
});

app.listen(3001, function () {
  console.log('Listening on 3001');
});
