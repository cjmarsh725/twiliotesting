const express = require("express");
const cors = require('cors');
require("dotenv").config();
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const server = express();
server.use(express.json());
server.use(cors({}));

server.post('/', (req, res) => {
  client.messages
    .create({
       body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
       from: '+14086179092',
       to: '+14087187190'
     })
    .then(message => console.log(message.sid));
  res.json({response: "message sent"});
})

server.listen(process.env.PORT, err => {
  if (err) console.log(err);
  else console.log(`Server listening on port ${process.env.PORT}`);
})


/*
client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14086179092',
     to: '+14087187190'
   })
  .then(message => console.log(message.sid));
  */