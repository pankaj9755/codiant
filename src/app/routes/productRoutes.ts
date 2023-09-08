import { RouterManager } from '../core/RouterManager'
import productController from '../controller/productController'

const productRouterManager: RouterManager = new RouterManager('/product')

productRouterManager.post('/create', productController.create)
productRouterManager.get('/list',productController.list )
productRouterManager.post('/categories', productController.categories)
productRouterManager.get('/categories/list',productController.categoriesList )
productRouterManager.post('/addSubCategory', productController.addSubCategory)




export default productRouterManager

