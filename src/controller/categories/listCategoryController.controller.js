import listCategoryService from "../../services/categories/listCategoryService.service";

const listCategoryController = async (request, response) => {
    const {id} = request.params
    
    try {
        const listCategory = await listCategoryService(id)

        return response.status(200).json(listCategory)
    } catch (error) {
        return response.status(400).json({message: error.message})
    }
}

export default listCategoryController