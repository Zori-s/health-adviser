import connection from "@/lib/db";

export default async(req,res) => {
    if(req.method === "POST") {
        const { search_doctor, search_speciality } = req.body;
        let conQuery;
        if(!search_speciality ){
            res.status(400).json({error: "Missing Data"});
        } else{ 
            conQuery = `SELECT * FROM users WHERE ((fname = ' ${ req.body.search_doctor}' || lname = '${req.body.search_doctor}') && speciality = '${req.body.search_speciality}') || speciality = '${req.body.search_speciality}' ; `;
        } 
        connection.query(conQuery, (error, results, fields) => {
            if (error) {
                res.status(500).json({ error: 'Error executing query' });
                return;
              }
              res.status(200).json(results);
        });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
      }

    
}