const knex = require(`knex`);
const dotenv = require ('dotenv');

dotenv.config();

const db=knex({
    client:'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.envDB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        ssl: {erjectUnauthorized: false}
    }
})

const getAllProducts = () => {
    return db('products')
    .select('name', 'price', 'id')
    .orderBy('name')
}

const searchProduct = (query) => {
    return db('products')
    .select('name', 'price', 'id')
.whereILike('name', `${query}`)
}

const deleteProduct =(id)=>{
    return db('products')
    .del()
    .where({id:id})
    .returning('*')
}

const updateProduct = (id, name, price)

const insertProduct = 
module.exports = {
    getAllProducts,
    getProduct,
    searchProduct,
    insertProduct,
    deleteProduct,
    updateProduct
}