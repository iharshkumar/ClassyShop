import { Router } from "express";
import auth from "../middleware/auth.js";
import upload from '../middleware/multer.js'
import { addAdsBannerV2, deleteAdsBannerV2, getAdsBannerV2, getSingleAdsBannerV2, updateAdsBannerV2, uploadAdsBannerV2Images } from "../controllers/adsBannerV2.controller.js";
import { removeImageFromCloudinary } from "../controllers/homeSlider.controller.js";

const adsBannerV2Router = Router();

adsBannerV2Router.post('/uploadImages', auth, upload.array('images'), uploadAdsBannerV2Images);
adsBannerV2Router.post('/add', auth, addAdsBannerV2);
adsBannerV2Router.get('/', getAdsBannerV2);
adsBannerV2Router.get('/:id', getSingleAdsBannerV2);
adsBannerV2Router.delete('/deleteImage', auth, removeImageFromCloudinary);
adsBannerV2Router.delete('/:id', auth, deleteAdsBannerV2);
adsBannerV2Router.put('/:id', auth, updateAdsBannerV2);

export default adsBannerV2Router;

