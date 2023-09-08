import { Context } from "koa";
import logger from "../../logger";
import httpConstants from "../constant/httpConstants";
import productService from "../service/productService";
import apiErrorHandler from "../utils/ApiErrorHandler";
class ProductController {
  constructor() {}

  async create(ctx: Context) {
    try {
      await productService.create(ctx);

      ctx.status = httpConstants.HTTP_CREATED;
    } catch (error) {
      apiErrorHandler.errorHandler(error, ctx);

      logger.error(`Controller : create, Error : ${JSON.stringify(error)}`);
    }
  }
  async categories(ctx: Context) {
    try {
      await productService.categories(ctx);

      ctx.status = httpConstants.HTTP_CREATED;
    } catch (error) {
      apiErrorHandler.errorHandler(error, ctx);

      logger.error(`Controller : create, Error : ${JSON.stringify(error)}`);
    }
  }
  async list(ctx: Context) {
    try {
        let users = await productService.getAllProduct(ctx)

        ctx.status = httpConstants.HTTP_SUCCESS_OK
        ctx.body = users
        logger.info(`Controller : getAllProduct, Response-Body : ${JSON.stringify(ctx.body)}`)
    } catch (error) {
        apiErrorHandler.errorHandler(error, ctx);

        logger.error(`Controller : getAllProduct, Error : ${JSON.stringify(error)}`)
    }
}
async categoriesList(ctx: Context) {
  try {
      let users = await productService.categoriesList(ctx)

      ctx.status = httpConstants.HTTP_SUCCESS_OK
      ctx.body = users
      logger.info(`Controller : categoriesList, Response-Body : ${JSON.stringify(ctx.body)}`)
  } catch (error) {
      apiErrorHandler.errorHandler(error, ctx);

      logger.error(`Controller : getAllProduct, Error : ${JSON.stringify(error)}`)
  }
}
async addSubCategory(ctx: Context) {
  try {
    await productService.addSubCategory(ctx);

    ctx.status = httpConstants.HTTP_CREATED;
  } catch (error) {
    apiErrorHandler.errorHandler(error, ctx);

    logger.error(`Controller : create, Error : ${JSON.stringify(error)}`);
  }
}


}

const productController: ProductController = new ProductController();
export default productController;
