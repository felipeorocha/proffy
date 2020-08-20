import { Router } from 'express';
import db from './database/connection';

const routes = Router();

routes.post('/classes', async (req, res) => {
  const {
    name,
    avatar,
    phone,
    bio,
    subject,
    cost,
    schedule
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
