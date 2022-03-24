const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Ph1LL!fe',
    port: 5432,
  });

  const createMintRecord = (body) => {
    /*return new Promise(function(resolve, reject) {
      const { name, email } = body
      pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`)
      })
    })*/
  }

  const getMintedRecord = (body) => {
      
  }