// export default Object authcontroller{
//   login(username, password) {
//     //   if (password !== process.env.SECRET_WORD) {
//     //     res.status(401).send({ error: 'Invalid password' });
//     //     return;
//     //   }
//     // const token = jwt.sign({ username: username }, process.env.SECRET_WORD);
//     return 'esto es un token';
//   }
// };

let auth = {
  login: function(username, password) {
    //   if (password !== process.env.SECRET_WORD) {
    //     res.status(401).send({ error: 'Invalid password' });
    //     return;
    //   }
    // const token = jwt.sign({ username: username }, process.env.SECRET_WORD);
    return 'Este es tu token ' + username;
  },
  test: function() {}
};
export default auth;
