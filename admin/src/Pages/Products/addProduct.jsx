import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from '../../Components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { IoMdClose } from 'react-icons/io'
import { Button } from '@mui/material';
import { GrCloudUpload } from "react-icons/gr";

const AddProduct = () => {

  const [productCat, setProductCat] = useState('');
  const [productSubCat, setProductSubCat] = useState('');
  const [productFeatured, setProductFeatured] = useState('');
  const [productRams, setProductRams] = useState('');

  const [productWeight, setProductWeight] = useState('');
  const [productSize, setProductSize] = useState('');

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };

  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };

  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };
  return (
    <section className='!p-5 !bg-gray-100'>
      <form className='form !py-0 !p-8'>
        <div className='scroll !min-h-[72vh] !overflow-y-scroll !pr-2'>
          <div className='grid grid-cols-1 !mb-3'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1'>Product Name</h3>
              <input
                type="text"
                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fafafa]'/>
            </div>
          </div>


          <div className='grid grid-cols-1 !mb-3'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1'>Product Description</h3>
              <textarea
                type="text"
                className='w-full h-[140px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fff]'/>
            </div>
          </div>

          <div className='grid grid-cols-4 !mb-3 gap-4'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1'>Product Category</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size='small'
                className='w-full !bg-[#fafafa]'
                value={productCat}
                label="Category"
                onChange={handleChangeProductCat}
              >
                <MenuItem value={''}>None</MenuItem>
                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Beauty</MenuItem>
                <MenuItem value={30}>Wellness</MenuItem>
              </Select>
            </div>



            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1'>Product Sub Category</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productSubCatDrop"
                size='small'
                className='w-full !bg-[#fafafa]'
                value={productSubCat}
                label="Category"
                onChange={handleChangeProductSubCat}
              >
                <MenuItem value={''}>None</MenuItem>
                <MenuItem value={10}>Men</MenuItem>
                <MenuItem value={20}>Women</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>


            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1 !text-black'>Price</h3>
              <input
                type="number"
                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fff]'/>
            </div>

            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1 '>Product Old Price</h3>
              <input
                type="number"
                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fff]'/>
            </div>
          </div>


          <div className='grid grid-cols-4 !mb-3 gap-4'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1'>Is Featured?</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size='small'
                className='w-full !bg-[#fafafa]'
                value={productFeatured}
                label="Category"
                onChange={handleChangeProductFeatured}
              >
                <MenuItem value={10}>True</MenuItem>
                <MenuItem value={20}>False</MenuItem>
              </Select>
            </div>



            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1 !text-black'>Product Stock</h3>
              <input
                type="number"
                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fff]'/>
            </div>


            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1 !text-black'>Brand</h3>
              <input
                type="text"
                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fff]'/>
            </div>

            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1 !text-black'>Discount</h3>
              <input
                type="number"
                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fff]'/>
            </div>
          </div>

          <div className='grid grid-cols-4 !mb-3 gap-4'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1'>Product RAMS</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size='small'
                className='w-full !bg-[#fafafa]'
                value={productRams}
                label="Category"
                onChange={handleChangeProductRams}
              >
                <MenuItem value={'4GB'}>4GB</MenuItem>
                <MenuItem value={'6GB'}>6GB</MenuItem>
                <MenuItem value={'8GB'}>8GB</MenuItem>
              </Select>
            </div>



            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1'>Product Weight</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productSubCatDrop"
                size='small'
                className='w-full !bg-[#fafafa]'
                value={productWeight}
                label="Category"
                onChange={handleChangeProductWeight}
              >
                <MenuItem value={''}>None</MenuItem>
                <MenuItem value={10}>2KG</MenuItem>
                <MenuItem value={20}>4KG</MenuItem>
                <MenuItem value={30}>5KG</MenuItem>
              </Select>
            </div>


            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1'>Product Size</h3>
              <Select
                labelId="demo-simple-select-label"
                id="productSubCatDrop"
                size='small'
                className='w-full !bg-[#fafafa]'
                value={productSize}
                label="Category"
                onChange={handleChangeProductSize}
              >
                <MenuItem value={''}>None</MenuItem>
                <MenuItem value={'S'}>S</MenuItem>
                <MenuItem value={'M'}>M</MenuItem>
                <MenuItem value={'L'}>L</MenuItem>
                <MenuItem value={'XL'}>XL</MenuItem>
              </Select>
            </div>

            <div className='col'>
              <h3 className='text-[14px] font-[500] !mb-1 '>Product Rating</h3>
              <Rating name="half-rating" defaultValue={3} precision={0.5} />
            </div>
          </div>



          <div className='col w-full !p-5 !px-0'>
            <h3 className='text-[18px] font-[700] !mb-4'>Media & Images</h3>


            <div className='grid grid-cols-7 gap-4'>
              <div className='uploadBoxWrapper relative'>


                <span className='absolute w-[20px] h-[20px] !rounded-full !overflow-hidden !bg-red-500 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer'>
                  <IoMdClose className='text-white text-[17px]' />
                </span>


                <div className='uploadBox !p-0 !rounded-md !overflow-hidden !border  !border-dashed
    !border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] !bg-gray-100 cursor-pointer 
    hover:!bg-gray-200 flex items-center justify-center flex-col relative'>

                  <LazyLoadImage
                    className='w-full h-full !object-cover'
                    alt={"image"}
                    effect='blur'
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"} />
                </div>
              </div>

              <div className='uploadBoxWrapper relative'>


                <span className='absolute w-[20px] h-[20px] !rounded-full !overflow-hidden !bg-red-500 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer'>
                  <IoMdClose className='text-white text-[17px]' />
                </span>


                <div className='uploadBox !p-0 !rounded-md !overflow-hidden !border  !border-dashed
    !border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] !bg-gray-100 cursor-pointer 
    hover:!bg-gray-200 flex items-center justify-center flex-col relative'>

                  <LazyLoadImage
                    className='w-full h-full !object-cover'
                    alt={"image"}
                    effect='blur'
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"} />
                </div>
              </div>

              <div className='uploadBoxWrapper relative'>


                <span className='absolute w-[20px] h-[20px] !rounded-full !overflow-hidden !bg-red-500 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer'>
                  <IoMdClose className='text-white text-[17px]' />
                </span>


                <div className='uploadBox !p-0 !rounded-md !overflow-hidden !border  !border-dashed
    !border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] !bg-gray-100 cursor-pointer 
    hover:!bg-gray-200 flex items-center justify-center flex-col relative'>

                  <LazyLoadImage
                    className='w-full h-full !object-cover'
                    alt={"image"}
                    effect='blur'
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"} />
                </div>
              </div>

              <div className='uploadBoxWrapper relative'>


                <span className='absolute w-[20px] h-[20px] !rounded-full !overflow-hidden !bg-red-500 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer'>
                  <IoMdClose className='text-white text-[17px]' />
                </span>


                <div className='uploadBox !p-0 !rounded-md !overflow-hidden !border  !border-dashed
    !border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] !bg-gray-100 cursor-pointer 
    hover:!bg-gray-200 flex items-center justify-center flex-col relative'>

                  <LazyLoadImage
                    className='w-full h-full !object-cover'
                    alt={"image"}
                    effect='blur'
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/6/e602addAW25GGDWKS2787_1.jpg"} />
                </div>
              </div>
              <UploadBox multiple={true} />
            </div>

          </div>

        </div>

      </form>

      {/* Sticky Footer Button */}
      <div className='sticky bottom-0 !bg-gray-100 left-0 right-0  !p-5 !border-t !border-gray-300 z-50'>
        <Button type='button' className='btn-blue btn-lg w-full flex gap-4'>
          <GrCloudUpload className='text-[25px] text-white' />
          Publish and View</Button>
      </div>
    </section>
  )
}

export default AddProduct