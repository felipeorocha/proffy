import { Router } from 'express';
import db from './database/connection';

const routes = Router();

routes.post('/users', async (req, res) => {
  const {
    name,
    avatar,
    phone,
    bio
  } = req.body;

  await db('users').insert({
    name,
    avatar,
    phone,
    bio
  });

  return res.send();
});

export default routes;
