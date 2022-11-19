import listProductService from "../../services/products/listProductService.service"

const listProductController = async (request, response) => {
    const {id} = request.params

    try {
        const listProduct = await listProductService(id)
        
        if(listProduct == undefined){
            return response.status(400).json({message: "Produto inexistente"})
        }
        
        return response.status(200).json(listProduct)
    } catch (error) {
        
        return response.status(400).json({message: error.message})
    }
}

export default listProductController