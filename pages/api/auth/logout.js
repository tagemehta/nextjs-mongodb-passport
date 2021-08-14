import nc from 'next-connect';
import { all } from '../../../middleware';

const handler = nc();
handler.use(all);

handler.get((req, res) => {
  req.logout();
  res.send('OK');
});

export default handler;
