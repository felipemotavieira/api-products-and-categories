import database from "../../database"
import { v4 as uuidv4 } from "uuid"

const createProductService = async (name, price, category_id) => {
    const id = uuidv4()

    try {
        const res = await database.query(
        "INSERT INTO products(name, price, category_id, id) VALUES($1, $2, $3, $4) RETURNING *;",
        [name, price, category_id, id]
    );

    const returnObject = {
        message: "Produto criado com sucesso",
        product: res.rows[0]
    };

    return returnObject;

    } catch (error) {
        throw new Error()
    }
    
};

export default createProductService