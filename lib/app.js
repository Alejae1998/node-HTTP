import cats from './routes/cats.js';
import candies from './routes/candies.js';
import notFound from './not-found.js';
import bodyParser from 'body-parser';

const betterLog = (...args) => console.log('[server]', ...args);

const routes = {
  cats,
  candies,
};

export default async function (req, res) {
  const parts = req.url.split('/');
  betterLog(parts);
  if (parts.length && parts[1] === 'api') {
    const httpMethod = req.method.toLowerCase();
    if (httpMethod == ('post' || 'put' || 'delete')) {
      req.body = await bodyParser(req);
      betterLog(req.body);
    }

    const resource = routes[parts[parts.length - 1]];
    if (resource == null) {
      notFound(req, res);
      return
    }
    const route = resource[req.method.toLowerCase()];
    if (route == null) {
      notFound(req, res);
      return;
    }
    
    route(req, res);
    return;

  }

  notFound(req, res);
}
