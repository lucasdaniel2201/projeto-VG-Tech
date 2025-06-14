import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/';



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

app.listen(2000, () => {
  console.log('Servidor está rodando no link: http://localhost:2000');
  console.log(`Conectando ao google drive com o TOKEN: ${process.env.GOOGLE_DRIVE_TOKEN}`);
});

