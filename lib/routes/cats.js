const cats = [
  {
    name: 'Pumpkin',
    breed: 'British  Short hair'
  },
  {
    name: 'Bobby',
    breed: 'Siamese'
  }
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.statusCode = 200;
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    console.log('req.body', req.body)
    res.statusCode = 200;
    res.end();
  },
  put(req, res) {
    cats.forEach((cat) => {
      cat['species'] = 'cat';
    });
    cats.push(req.body);
    console.log('req.body', req.body)
    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    cats.pop();
    console.log('cats', cats);
    res.statusCode = 204;
    res.end();
  },
};
