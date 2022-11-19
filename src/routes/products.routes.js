import { Router } from "express";
import createProductController from "../controller/products/createProductController.control..er";
import deleteProductController from "../controller/products/deleteProductcontroller.controller";
import listProductByCategoryController from "../controller/products/listProductByCategoryController.controller";
import listProductController from "../controller/products/listProductController.controller";
import listProductsController from "../controller/products/listProductsController.controller";
import updateProductController from "../controller/products/updateProductController.controller";

const router = Router()

router.post("", createProductController)
router.get("", listProductsController)
router.get("/:id", listProductController)
router.patch("/:id", updateProductController)
router.delete("/:id", deleteProductController)
router.get("/category/:id", listProductByCategoryController)

export default router