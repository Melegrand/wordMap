import client from '../database.js';

const pays = await client.query('SELECT * FROM pays');

  export default pays