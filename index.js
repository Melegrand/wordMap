import express from 'express';
import session from 'express-session';
import {router} from './app/router.js'
import * as dotenv from 'dotenv'

const app = express();
const port = process.env.PORT || 3000;

dotenv.config()

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./WordMap/public'));
app.use(router);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

