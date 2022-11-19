import express from "express";
import "dotenv/config";
import { startDatabase } from "./database/index.js";
import categoriesRoutes from "./routes/categories.routes"
import productsRoutes from "./routes/products.routes"

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes)
app.use("/products", productsRoutes)

const PORT = process.env.PORT || 3000

export default app.listen(PORT, () => {
  startDatabase()
  console.log("Rodando na porta " + PORT);
});

