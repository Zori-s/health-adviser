import connection from "@/lib/db";

export default async function handler(req, res) {
    try {
        const result = await new Promise((resolve, reject) => {
            connection.query('select * from posts;', (err, results) => {
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