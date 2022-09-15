const sauces = [
  {
    name: 'Tzatziki',
    taste: 'fresh and tangy flavor with greek yogurt and cucumber'
  }
];

export default {
  get(req, res) {
    res.write(JSON.stringify(sauces));
    res.statusCode = 200;
    res.end();
  },
  post(req, res) {
    sauces.push(req.body);
    console.log('req.body', req.body)
    res.statusCode = 200;
    res.end();
  },
  put(req, res) {
    sauces.forEach((sauce) => {
      sauce['type'] = 'american';
    });
    sauces.push(req.body);
    console.log('req.body', req.body)

    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    sauces.pop();
    res.statusCode = 204;
    res.end();
  },
};