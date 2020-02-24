import jwt from 'jsonwebtoken';

const auth = {
  login: function(username: string, password: string): string | null {
      if (password !== process.env.SECRET_WORD) return null;
      else return jwt.sign(JSON.stringify({ username: username }), process.env.SECRET_WORD);
  },
};

export default auth;
