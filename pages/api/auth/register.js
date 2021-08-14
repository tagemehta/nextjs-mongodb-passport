import nc from 'next-connect';
import { all } from '../../../middleware';
import UsersDAO from '../../../dao/usersDAO';

const handler = nc();

handler.use(all);

handler.post(async (req, res) => {
  const { body: { email, password, name }, db } = req;
  if (!email) {
    res.json({ error: 'Missing required field: Email', data: null });
    return;
  } if (!password) {
    res.json({ error: 'Missing required field: Password', data: null });
    return;
  }
  const { result: emailResult } = await UsersDAO.findByEmail(db, email);
  if (emailResult) {
    res.json({ error: 'Email already in use', data: null });
    return;
  }

  try {
    const { result, error } = await UsersDAO.createUser(db, { email, name, password });
    if (error) {
      res.status(500).json({ error, result: null, message: 'An error occurred' });
    }
    req.login(result.ops[0], (err) => {
      if (err) {
        res.json({ error: err.toString(), data: null });
        return;
      }
      res.json({ error: null, result: { name } });
    });
  } catch (e) {
    res.json({ error: e.toString(), result: null });
  }
});

export default handler;
