import updateProductService from "../../services/products/updateProductService.service"

const updateProductController = async (request, response) => {
    const {id} = request.params
    const user = request.body
    
    try {
        const updateCategory = await updateProductService(id, user)
        
        return response.status(200).json(updateCategory)
    } catch (error) {
        return response.status(400).json({message: error.message})
    }
}

export default updateProductController