import { Router } from "express";
import auth from "../middleware/auth.js";
import upload from '../middleware/multer.js'
import { addAdsBannerV1, deleteAdsBannerV1, getAdsBannerV1, getSingleAdsBannerV1, updateAdsBannerV1, uploadAdsBannerV1Images } from "../controllers/adsBannerV1.controller.js";
import { removeImageFromCloudinary } from "../controllers/homeSlider.controller.js";

const adsBannerV1Router = Router();

adsBannerV1Router.post('/uploadImages', auth, upload.array('images'), uploadAdsBannerV1Images);
adsBannerV1Router.post('/add', auth, addAdsBannerV1);
adsBannerV1Router.get('/', getAdsBannerV1);
adsBannerV1Router.get('/:id', getSingleAdsBannerV1);
adsBannerV1Router.delete('/deleteImage', auth, removeImageFromCloudinary);
adsBannerV1Router.delete('/:id', auth, deleteAdsBannerV1);
adsBannerV1Router.put('/:id', auth, updateAdsBannerV1);

export default adsBannerV1Router;

