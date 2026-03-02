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
    updateProduct,
    deleteMultipleProduct,
    createProductRAMS,
    deleteProductRAM,
    updateProductRAM,
    getProductRAM,
    getProductRAMId,

    createProductWEIGHT,
    deleteProductWEIGHT,
    updateProductWEIGHT,
    getProductWEIGHT,
    getProductWEIGHTById,

    createProductSIZE,
    deleteProductSIZE,
    updateProductSIZE,
    getProductSIZE,
    getProductSIZEById
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
productRouter.delete('/deleteMultiple',deleteMultipleProduct);
productRouter.delete('/:id',deleteProduct);
productRouter.get('/:id',getProduct);
productRouter.delete('/deleteImage',auth,removeImageFromCloudinary);
productRouter.put('/updateProduct/:id',auth,updateProduct);

{/*PRODUCT RAM ROUTES */}
productRouter.post('/productRAMS/create',auth,createProductRAMS);
productRouter.delete('/productRAMS/:id',auth,deleteProductRAM)
productRouter.put('/productRAMS/:id',auth,updateProductRAM);
productRouter.get('/productRAMS/get',getProductRAM);
productRouter.get('/productRAMS/:id',getProductRAMId);

{/*PRODUCT WEIGHT ROUTES */}
productRouter.post('/productWEIGHT/create',auth,createProductWEIGHT);
productRouter.delete('/productWEIGHT/:id',auth,deleteProductWEIGHT)
productRouter.put('/productWEIGHT/:id',auth,updateProductWEIGHT);
productRouter.get('/productWEIGHT/get',getProductWEIGHT);
productRouter.get('/productWEIGHT/:id',getProductWEIGHTById);

{/*PRODUCT SIZE ROUTES */}
productRouter.post('/productSIZE/create',auth,createProductSIZE);
productRouter.delete('/productSIZE/:id',auth,deleteProductSIZE)
productRouter.put('/productSIZE/:id',auth,updateProductSIZE);
productRouter.get('/productSIZE/get',getProductSIZE);
productRouter.get('/productSIZE/:id',getProductSIZEById);



export default productRouter