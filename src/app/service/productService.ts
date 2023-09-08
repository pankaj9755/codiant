import { Context } from "koa";
import library from "../db/entity/library";
import { Op } from "sequelize";
require("dotenv").config();

class ProductService {
  constructor() { }

  async create(ctx: Context) {
    let { name, prize ,status, categoryId } = ctx.request.body
    await library.products.create({
      name:name,
      prize:prize,
      status:status
    });
  }
  async categories(ctx: Context) {
    let { name, categoryId} = ctx.request.body
     await library.categories.create({
      name:name,
     
    });
  }
  async addSubCategory(ctx: Context) {
    let { name} = ctx.request.body
     await library.subCategories.create({
      name:name,
     
    });
  }
  
  
  async getAllProduct(ctx: Context) {
    let productData = await library.products.findAll();
    return productData;
  }
  async categoriesList(ctx: Context) {
    let categoriesList = await library.categories.findAll();
    return categoriesList;
  }
  
}
let productService: ProductService = new ProductService();
export default productService;
