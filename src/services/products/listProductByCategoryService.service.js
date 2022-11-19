import database from "../../database"

const listProductByCategoryService = async (id) => {
    
    try {
        const res = await database.query(
        "SELECT p.name, p.price, c.name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.category_id = $1;",
        [id]
        );

        const returnObject = [{
            message: "Produtos por categoria",
            category: res.rows[0]
        }]
        return returnObject
    } catch (error) {
        throw new Error(error)
    }
}

export default listProductByCategoryService