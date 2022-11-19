import { Router } from "express";
import createCategoryController from "../controller/categories/createCategoryController.controller";
import deleteCategoryController from "../controller/categories/deleteCategoryController.controller";
import listCategoriesController from "../controller/categories/listCategoriesController.controller";
import listCategoryController from "../controller/categories/listCategoryController.controller";
import updateCategoryController from "../controller/categories/updateCategoryController.controller";

const router = Router()

router.get("", listCategoriesController)
router.get("/:id", listCategoryController)
router.post("", createCategoryController)
router.patch("/:id", updateCategoryController)
router.delete("/:id", deleteCategoryController)

export default router