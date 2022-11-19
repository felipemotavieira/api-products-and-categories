import database from "../../database"

const deleteCategoryService = async (id) => {
    try {
        const res = await database.query(
            "DELETE FROM Categories WHERE id = $1",
            [id]
        );
        return res.rows[0];
    } catch (error) {
        throw new Error(error)
    }
}

export default deleteCategoryService