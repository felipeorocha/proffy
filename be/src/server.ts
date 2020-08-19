import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log("teste");
});

app.listen(3333);
