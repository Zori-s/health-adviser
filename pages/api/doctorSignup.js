import connection from '../../lib/db';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { fname, lname, email, phone_number, gender, age, types, password, speciality, start_job_date, education, description } = req.body;
    if (!fname || !lname || !email || !phone_number || !gender || !age || !types || !password || !speciality || !start_job_date || !education || !description) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }
    connection.query(`INSERT INTO users (fname, lname, email, phone_number, gender, age, types , password, speciality, start_job_date, education, description) VALUES ('${req.body.fname}', '${req.body.lname}', '${req.body.email}', '${req.body.phone_number}', '${req.body.gender}', '${req.body.age}', '${req.body.types}', '${req.body.password}', '${req.body.speciality}', '${req.body.start_job_date}', '${req.body.education}', '${req.body.description}');`, (error, results, fields) => {
      if (error) {
        //console.log(`INSERT INTO users (fname, lname, email, phone_number, gender, age, types , password, speciality, start_job_date, education, description) VALUES ('${req.body.fname}', '${req.body.lname}', '${req.body.email}', '${req.body.phone_number}', '${req.body.gender}', '${req.body.age}', '${req.body.types}', '${req.body.password} ', '${req.body.speciality}', '${req.body.start_job_date}', '${req.body.education}', '${req.body.description}');`);
        res.status(500).json({ error: 'Error executing query' });
        return;
      }
      res.status(200).json(results);
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
