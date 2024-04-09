const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
app.use(express.json());

dotenv.config();
const port = 8000;
app.use(cors());

mongoose.connect((process.env.uri), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const bitcoinRouter = require("./router/bitcoinRouter");
app.use("/bitcoin",bitcoinRouter);
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(port, ()=>{
    console.log("Server running on port ");
})