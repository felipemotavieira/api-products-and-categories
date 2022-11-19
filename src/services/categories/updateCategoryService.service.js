import database from "../../database"

const updateCategoryService = async (name, id) => {
    try {
        const res = await database.query(
            "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;",
            [name, id]
        );
        const returnObject = {
            message: "Categoria atualizada com sucess",
            category: res.rows[0]
        }
        return returnObject;
    } catch (error) {
        throw new Error(error)
    }
}

export default updateCategoryService