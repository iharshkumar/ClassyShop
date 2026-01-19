import React from 'react'
import UploadBox from '../../Components/UploadBox'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IoMdClose } from 'react-icons/io'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Button } from '@mui/material'
import { GrCloudUpload } from 'react-icons/gr'


const AddCategory = () => {
    return (
        <section className='!p-5 !bg-gray-100'>
            <form className='form !py-0 !p-8'>
                <div className='scroll !min-h-[72vh] !overflow-y-scroll !pr-4 !pt-4'>
                    <div className='grid grid-cols-1 !mb-3'>
                        <div className='col w-[25%]'>
                            <h3 className='!text-[18px] !font-[500] !mb-1 text-black-500'>Category Name</h3>
                            <input
                                type="text"
                                className='w-full h-[40px] border border-[rgba(0,0,0,0.2)]
          !focus:outline-none !focus:border-[rgba(0,0,0,0.4)] !rounded-sm !p-3 !text-sm !bg-[#fafafa]'/>
                        </div>
                    </div>
<br />

                    <h3 className='!text-[18px] !font-[500] !mb-2 text-black-500'>Category Image</h3>


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


                        <UploadBox multiple={true} />

                    </div>

                    <br />
                    <br />
                    <div className='w-[250px]'>
                        <Button type='button' className='btn-blue btn-lg w-full flex gap-2 '>
                            <GrCloudUpload className='text-[25px] text-white' />
                            Publish and View
                        </Button>
                    </div>
                </div>



            </form>
        </section>
    )
}

export default AddCategory