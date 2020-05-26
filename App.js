require('dotenv').config();
const DISCORD = require('discord.js');
const client = new DISCORD.Client();


client.login(process.env.TOKEN);