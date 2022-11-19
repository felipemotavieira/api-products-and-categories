import deleteProductService from "../../services/products/deleteProductService.service"

const deleteProductController = async (request, response) => {
    const {id} = request.params
    
    try {
        const deleteProduct = await deleteProductService(id)
        
        return response.status(204).json(deleteProduct)
    } catch (error) {
        return response.status(400).json({message: error.message})
    }
}

export default deleteProductController