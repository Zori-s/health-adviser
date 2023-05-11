import connection from "@/lib/db";

export default async(req,res) => {
    if(req.method === "POST") {
        const {from_user_id, to_user_id, message, message_date} = req.body;
        console.log('body',from_user_id, to_user_id, message, message_date)
        if(!from_user_id && !to_user_id && !message && !message_date){
            res.status(400).json({error: "Missing Data"});
        } 
            connection.query(`INSERT INTO chats(to_user, from_user, message, create_date) VALUES ('${req.body.from_user_id}','${req.body.to_user_id}','${req.body.message}','${req.body.message_date}');`, (error, results, fields) => {
            if (error) {
                res.status(500).json({ error: 'Error executing query'});
                return;
              }
              res.status(200).json(results);
        });
    } 

    
}