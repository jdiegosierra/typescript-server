import authcontroller from '../controllers/auth';
//const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

/**
 * @api {post} /api/v1/login Request Token
 * @apiName PostLogin
 * @apiGroup Authentication
 *
 * @apiParam {String} username Username unique ID.
 * @apiParam {String} password Password associated with the username account.
 *
 * @apiSuccess {JSON} token Token access.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpZWdvIiwiaWF0IjoxNTYwMzQzMDk5fQ.9xHv04cJFLcOKRaDCwRP6FLKQj2rHfXKQskAMJx-NjA"
 *}
 *
 * @apiError NotAuthorized Invalid password.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Not Authorized
 *     {
 *       "error": "Invalid password"
 *     }
 */

let auth = {
  login: function(_req, res) {
    res.status(200).send(authcontroller.login('diego', 'password'));
    // res.status(200).json({ token });
  },
  verifyToken: function(req, res, next) {
    console.log('Token válido');
    next();
    // var token = req.headers['authorization'];
    // if (!token) {
    //   res.status(401).send({
    //     error: 'Es necesario el token de autenticación'
    //   });
    //   return;
    // }
    // token = token.replace('Bearer ', '');

    // jwt.verify(token, process.env.SECRET_WORD, function(err, decoded) {
    //   if (err) {
    //     res.status(401).send({ error: 'Token inválido' });
    //   } else {
    //     res.locals.username = decoded.username;
    //     next();
    //   }
    // });
  }
};

// router.verifyToken = function(req, res, next) {
//   var token = req.headers['authorization'];
//   if (!token) {
//     res.status(401).send({
//       error: 'Es necesario el token de autenticación'
//     });
//     return;
//   }
//   token = token.replace('Bearer ', '');

//   jwt.verify(token, process.env.SECRET_WORD, function(err, decoded) {
//     if (err) {
//       res.status(401).send({ error: 'Token inválido' });
//     } else {
//       res.locals.username = decoded.username;
//       next();
//     }
//   });
// };

export default auth;
