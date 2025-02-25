import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
