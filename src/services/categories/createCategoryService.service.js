import database from "../../database"

const createCategoryService = async (name) => {
    try {
        const res = await database.query(
            "INSERT INTO Categories(name) VALUES($1) RETURNING *;",
            [name]
        );

        const returnObject = {
            message: "Categoria criada com sucess",
            category: res.rows[0]
        }
        return returnObject;

    } catch (error) {
        throw new Error(error);
    }
};

export default createCategoryService