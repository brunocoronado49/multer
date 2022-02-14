import express from 'express';
import path from 'path';
import { __dirname } from './config.js';
import indexRoute from './routes/index.js';

const app = express();

// Routes
app.use(indexRoute);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});