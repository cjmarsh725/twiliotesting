require("dotenv").config();
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14086179092',
     to: '+14087187190'
   })
  .then(message => console.log(message.sid));