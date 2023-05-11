const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'health_advise'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database as ID:', connection.threadId);
});

module.exports = connection;


/*
 export const db = mysql({
    config: {
        host: process.env.DATABASE_HOST,
        port: 3306,
        database: process.env.DATABASE,
        user:process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
    },
 });

 export default async function excuteQuery({query, values}) {
    try{
        const result = await db.query(query, values);
        await db.end();
        return result;
    } catch(error) {
        return{error};
    }
 } */

 