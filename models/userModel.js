const pool = require ('../config/db');

class  User {

    static async findAll ()
    {
        const result = await pool.query('SELECT * FROM users')
        return result.rows
    }

}

module.exports = User;