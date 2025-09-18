const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

//connect to MongoDB
const mongodbURL = "mongodb+srv://sekhardash733:4qxxYkYWfkly5Tgn@cluster0.zutoyy2.mongodb.net/";
mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected successfully to MongoDB");
});
app.get('/', (req, res) => {
  res.send('server is working oh yes!');
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
