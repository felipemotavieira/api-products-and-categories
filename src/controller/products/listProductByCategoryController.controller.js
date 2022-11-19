import listProductByCategoryService from "../../services/products/listProductByCategoryService.service"

const listProductByCategoryController = async (request, response) => {
    const {id} = request.params
    
    try {
        const listProductByCategor = await listProductByCategoryService(id)

        return response.status(200).json(listProductByCategor)
    } catch (error) {
        
        return response.status(400).json(error.message)
    }
}

export default listProductByCategoryController