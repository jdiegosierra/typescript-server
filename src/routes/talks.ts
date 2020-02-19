import talkcontroller from '../controllers/talk';

let talks = {
  add: function(req, res) {
    let talk = req.body.talk;
    if (talkcontroller.add(talk)) {
      res.status(200).send('okey');
    } else {
      res.status(400).send('error');
    }
  },
  get: async function(req, res) {
    const talksData = await talkcontroller.get();
    if (talksData) {
      res.status(200).json(talksData);
    } else {
      res.status(404).send('error');
    }
  }
};

export default talks;
