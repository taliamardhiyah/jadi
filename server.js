import 'dotenv/config'

import express from 'express';
import configViewEngine from './config/configEngine';
import routes from './routes/web';
import cronJobContronler from './controllers/cronJobContronler';
import socketIoController from './controllers/socketIoController';
require('dotenv').config();
let cookieParser = require('cookie-parser');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3200;

app.use(cookieParser());
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup viewEngine
configViewEngine(app);
// init Web Routes
routes.initWebRouter(app);

// Cron game 1 Phut 
cronJobContronler.cronJobGame1p(io);

// Periksa apakah saya telah terhubung ke server. 
socketIoController.sendMessageAdmin(io);

// app.all('*', (req, res) => {
//     return res.render("404.ejs"); 
// });

server.listen(port, () => {
    console.log("Berhasil terhubung ke port: " + port);
});

