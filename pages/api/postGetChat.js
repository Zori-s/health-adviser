import connection from "@/lib/db";

export default async function handler(req, res) {
    const {to_user_id, from_user_id} = req.body
    if(!from_user_id && !to_user_id){
        res.status(400).json({error: "Missing users"});
    } 
    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM chats 
                WHERE (to_user = '${req.body.to_user_id}' and from_user = '${req.body.from_user_id}') or (to_user = '${req.body.from_user_id}' and from_user = '${req.body.to_user_id}') order by id asc;`, (err, results) => {
                if (err) {
                    reject(error)}
                    else {
                        resolve(results);
                    }
            })
        })
        res.status(200).json({users : result});
    } catch {
        res.status(500).json({message : err.message});
    }
}