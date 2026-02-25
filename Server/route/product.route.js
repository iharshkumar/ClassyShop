import { Router } from "express";
import auth from "../middleware/auth.js";
import upload from '../middleware/multer.js'
import { uploadImages,  createProduct, getAllProducts, 
    getAllProductsByCatId, getAllProductsByCatName, getAllProductsByThirdLevelCatName, 
    getAllProductsBySubCatId, getAllProductsBySubCatName, 
    getAllProductsByPrice,
    getAllProductsByRating,
    getAllProductsByThirdLevelCatId,
    getProductsCount,
    getAllFeaturedProducts,
    deleteProduct,
    getProduct,
    removeImageFromCloudinary,
    updateProduct
} from "../controllers/product.controller.js";


const productRouter = Router();

productRouter.post('/uploadImages',auth,upload.array('images'),uploadImages);
productRouter.post('/create',auth,createProduct);
productRouter.get('/getAllProducts',getAllProducts);
productRouter.get('/getAllProductsByCatId/:id',getAllProductsByCatId);
productRouter.get('/getAllProductsByCatName',getAllProductsByCatName);
productRouter.get('/getAllProductsBySubCatId/:id',getAllProductsBySubCatId);
productRouter.get('/getAllProductsBySubCatName',getAllProductsBySubCatName);
productRouter.get('/getAllProductsByThirdLevelCat/:id',getAllProductsByThirdLevelCatId);
productRouter.get('/getAllProductsByThirdLevelCatName',getAllProductsByThirdLevelCatName);
productRouter.get('/getAllProductsByPrice',getAllProductsByPrice);
productRouter.get('/getAllProductsByRating',getAllProductsByRating);
productRouter.get('/getAllProductsCount',getProductsCount);
productRouter.get('/getAllFeaturedProducts',getAllFeaturedProducts);
productRouter.delete('/:id',deleteProduct);
productRouter.get('/:id',getProduct);
productRouter.delete('/deleteImage',auth,removeImageFromCloudinary);
productRouter.put('/updateProduct/:id',auth,updateProduct);


export default productRouter