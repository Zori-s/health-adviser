import connection from '../../lib/db';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { fname, lname, email, phone_number, gender, age, types, password } = req.body;
    if (!fname || !lname || !email || !phone_number || !gender || !age || !types || !password) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }
    connection.query(`INSERT INTO users (fname, lname, email, phone_number, gender, age, types , password) VALUES ('${req.body.fname}', '${req.body.lname}', '${req.body.email}', '${req.body.phone_number}', '${req.body.gender}', '${req.body.age}', '${req.body.types}', '${req.body.password}');`, (error, results, fields) => {
      if (error) {
        res.status(500).json({ error: 'Error executing query' });
        return;
      }
      res.status(200).json(results);
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};




/*import connection from '../../lib/db';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { fname, lname, email, phone_number, gender, age, types, password } = req.body;
    if (!fname || !lname || !email || !phone_number || !gender || !age || !types || !password) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }
    console.log(fname, lname, email,phone_number, gender, age, types, password);
    connection.query(`INSERT INTO users (fname, lname, email, phone_number, gender, age, types , password) VALUES ('${req.body.fname}', '${req.body.lname}', '${req.body.email}', '${req.body.phone_number}', '${req.body.gender}', '${req.body.age}', '${req.body.types}', '${req.body.password}');`,(error, results, fields) => {
        if (error) {
            //   console.error('Error executing query:', error.stack);
              res.status(500).json({ error: 'Error executing query' });
              return;
            }
            res.status(200).json(results);
     })
    
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};*/
