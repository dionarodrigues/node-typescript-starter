import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: '😊 Welcome!' });
});
export default routes;
