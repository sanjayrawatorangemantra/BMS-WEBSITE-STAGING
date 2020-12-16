

const express = require('express');
// const cors = require('cors');
const app = express();
const port = process.env.PORT || 3006;
const path = require('path');
const fs = require('fs');
const axios = require('axios')
// const Parser = require('html-react-parser')


const urlString = "https://api.beatmysugar.com/BackofficeApi/";

// const urlString = "http://localhost:7000/BackofficeApi/";

const ImgUrl = 'https://beatmysugar.com/assets/images/BMS-OG.png'



  // app.use(cors())
// app.use(cors())
app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));