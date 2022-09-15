const candies = [
  {
    name: 'Unreal',
    type: 'Chocolate and coconut'
  },
  {
    name: 'Simple Mills Chunky Cookie',
    type: 'Cookies'
  }
];

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.statusCode = 200;
    res.end();
  },
  put(req, res) {
    candies.forEach((candy) => {
      candy['sweet'] = 'true';
    });
    candies.push(req.body);
    console.log('req.body', req.body)

    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    candies.pop();
    res.statusCode = 204;
    res.end();
  },
};
