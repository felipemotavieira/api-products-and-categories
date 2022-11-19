import database from "../../database"

const listCategoryService = async (id) => {
    try {
        const res = await database.query(
            "SELECT * FROM Categories WHERE id = $1;",
            [id]
        );

        return res.rows[0];
    } catch (error) {
        throw new Error(error);
    }
}

export default listCategoryService