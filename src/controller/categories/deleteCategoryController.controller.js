import deleteCategoryService from "../../services/categories/deleteCategoryService.service";

const deleteCategoryController = async (request, response) => {
    const {id} = request.params
    
    try {
        const deleteCategory = await deleteCategoryService(id)

        return response.status(204).json(deleteCategory)
    } catch (error) {
        return response.status(400).json({message: error.message})
    }
}

export default deleteCategoryController