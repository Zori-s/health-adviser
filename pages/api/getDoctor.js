import connection from "@/lib/db";

export default async function handler(req, res) {
    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM users WHERE types = '2';`, (err, results) => {
                if (err) {
                    reject(err)}
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