import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import { router } from './router/router';

const app = express();
const port = process.env.PORT ?? 4000;

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.set('view engine', 'mustache');
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());
app.use(router);

app.listen(port, ()=>{
    console.log(`Server: http://localhost:${port}`);
});