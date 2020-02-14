import testcontroller from '../controllers/test';

let test = {
  test: function(_req, res) {
    res.status(200).send(testcontroller.test());
  }
};

export default test;
