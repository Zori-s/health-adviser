import connection from "@/lib/db";

export default async function handler(req, res) {
    const {from_user_id} = req.body
    if(!from_user_id){
        res.status(400).json({error: "Missing users"});
    } 
    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(`select case when to_user = '${req.body.from_user_id}' then from_user else to_user end as email , max(create_date) as date from chats where to_user = '${req.body.from_user_id}' or from_user = '${req.body.from_user_id}'
            group by case when to_user = '${req.body.from_user_id}' then from_user else to_user end
            order by 2 desc; `, (err, results) => {
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