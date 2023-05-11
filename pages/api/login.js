const connection = require("@/lib/db");

export default async(req, res) => {
    if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }
    connection.query(`SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}' ;`, (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while logging in' });
      } else if (results.length === 0) {
        res.status(401).json({ error: 'Invalid email or password' });
      } else {
        const user = results[0];
        // do something with the user object, like creating a JWT token and sending it in the response
        res.status(200).json({ message: 'Login successful', user });
      }
    });
    }
};
  