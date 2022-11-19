import database from "../../database";

const updateProductService = async (id, product) => {

    try {

        let query = "UPDATE products SET "
        const keys = Object.keys(product)
        const values = Object.values(product)

        keys.forEach((key, index) => {
            query += `${key} = \$${index+=1}, `
        })

        query = query.slice(0, -2)

        query += ` WHERE id = \$${keys.length+1} RETURNING *;`

        const res = await database.query(
            query,
            [...values, id]
        );

        if(res.rowCount === 0){
            throw new Error("Produto não encontrado")
        }
        const returnObject = {
            message: "Categoria atualizada com sucess",
            product: res.rows[0]
        }
        
        return returnObject;

        
    } catch (error) {
        throw new Error(error)
    }
}

export default updateProductService